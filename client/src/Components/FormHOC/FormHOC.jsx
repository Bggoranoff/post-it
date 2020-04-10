import React from 'react';

const runControlValidation = function (value, validations) {
    return validations.validate(value, { abortEarly: false });
}

const getValidationsRunnerForSchema = function (schema) {
    return function (form) {
        if (!schema) return Promise.resolve();

        return schema.validate(form, { abortEarly: false })
            .then(() => form)
            .catch(err => {
                const errors = err.inner.reduce(function (acc, { path, message }) {
                    acc[path] = (acc[path] || []).concat(message);
                    return acc;
                }, {});
                return Promise.reject(errors);
            });
    };
};

const getControlChangeHandler = function (validations, setValue, setErrors) {
    let id;
    return function (e) {
        const newValue = e.target.value;
        if (id) { clearTimeout(id); id = null; }
        id = setTimeout(function () {
            setValue(newValue);
            runControlValidation(newValue, validations)
                .then(function () {
                    setErrors(undefined);
                })
                .catch(function (err) {
                    setErrors(err.errors);
                });
            id = null;
        }, 200);
    };
};

const useFormControl = function (defaultValue, validations) {
    const [value, setValue] = React.useState(defaultValue);
    const [errors, setErrors] = React.useState(undefined);

    const changeHandler = React.useCallback(
        getControlChangeHandler(validations, setValue, setErrors),
        [validations, setValue, setErrors]
    );

    React.useMemo(function () {
        return {
            value, setValue, errors, setErrors, changeHandler
        }
    }, [value, setValue, errors, setErrors, changeHandler]);
};

function withForm(Cmp, initialState, schema) {
    return class extends React.Component {
        state = {
            form: initialState,
            errors: undefined
        };

        controlChangeHandlerFactory = (name) => {
            let id;
            return e => {
                const newValue = e.target.value;
                console.log(e.target.value);
                if (id) { clearTimeout(id); id = null; }
                id = setTimeout(() => {
                    this.setState(({ form }) => {
                        return { form: { ...form, [name]: newValue } };
                    });
                    this.runControlValidation(name)
                        .then(() => {
                            this.setState(({ errors: { [name]: current, ...others } = {} }) =>
                                ({ errors: Object.keys(others).length === 0 ? undefined : others })
                            );
                        })
                        .catch(err => {
                            this.setState(({ errors }) => ({ errors: { ...errors, [name]: err.errors } }));
                        });
                    id = null;
                }, 200);
            };
        };

        getFormState = () => {
            return this.state.form;
        };

        getFormErrorState = () => {
            return this.state.errors;
        };

        runControlValidation = name => {
            if (!schema) { return Promise.resolve(); }
            const currentValue = this.state.form[name];
            return schema.fields[name].validate(currentValue, { abortEarly: false });
        };

        runValidations = () => {
            if (!schema) { return Promise.resolve(); }
            return schema.validate(this.state.form, { abortEarly: false })
                .then(() => {
                    this.setState({ errors: undefined });
                    return this.state.form;
                })
                .catch(err => {
                    const errors = err.inner.reduce((acc, { path, message }) => {
                        acc[path] = (acc[path] || []).concat(message);
                        return acc;
                    }, {});
                    this.setState({ errors: errors });
                });
        };

        render() {
            return <Cmp {...this.props} controlChangeHandlerFactory={this.controlChangeHandlerFactory} getFormState={this.getFormState} getFormErrorState={this.getFormErrorState} runValidations={this.runValidations}></Cmp>
        }
    }
}

export default withForm;
export { useFormControl, getValidationsRunnerForSchema }