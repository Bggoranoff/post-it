import React from 'react';
import './Login.css';

import * as yup from 'yup';
import { StoreContext } from '../Store/Store'
import withForm from '../FormHOC/FormHOC';
import actions from '../Store/actions';


function useForceUpdate() {
    const [value, setValue] = React.useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function Login(props) {
    const { dispatch } = React.useContext(StoreContext);
    const usernameOnChangeHandler = props.controlChangeHandlerFactory('username');
    const passwordOnChangeHandler = props.controlChangeHandlerFactory('password');
    const submitHandler = React.useCallback(async function () {
        const errors = props.getFormErrorState();
        if (!!errors) return;
        const data = props.getFormState();
        dispatch(actions.login(data))
        window.location.replace('/');
        
    }, [dispatch])

    const getFirstControlError = name => {
        const errorState = props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    }

    const usernameError = getFirstControlError('username');
    const passwordError = getFirstControlError('password');

    return (
        <form className="Login">
            <h2>LOGIN</h2>
            <div className="form-control">
                <label>USERNAME</label>
                <input type="text" onChange={usernameOnChangeHandler} />
            </div>
            <div className="form-control">
                <label>PASSWORD</label>
                <input type="password" onChange={passwordOnChangeHandler} />
            </div>
            <div className="form-control">
                <button type="button" onClick={submitHandler}>LOGIN</button>
            </div>
        </form>
    );
}

const initialFormState = {
    username: '',
    password: ''
};

const schema = yup.object({
    username: yup.string('Username must be a string')
        .required('Username is required'),

    password: yup.string('Password should be a string')
        .required('Password is required')
});

export default withForm(Login, initialFormState, schema);