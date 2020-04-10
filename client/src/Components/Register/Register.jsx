import React from 'react';
import './Register.css';

import * as yup from 'yup';
import withForm from '../FormHOC/FormHOC';
import userService from '../services/user-service';

class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    fullnameOnChangeHandler = this.props.controlChangeHandlerFactory('fullname');
    pictureUrlOnChangeHandler = this.props.controlChangeHandlerFactory('pictureUrl');
    birthdateOnChangeHandler = this.props.controlChangeHandlerFactory('birthdate');
    bioOnChangeHandler = this.props.controlChangeHandlerFactory('bio');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) return;
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        });
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const usernameError = this.getFirstControlError('username');
        const passwordError = this.getFirstControlError('password');
        const rePasswordError = this.getFirstControlError('rePassword');
        const emailError = this.getFirstControlError('email');
        const fullnameError = this.getFirstControlError('fullname');
        const pictureUrlError = this.getFirstControlError('pictureUrl');
        const birthdateError = this.getFirstControlError('birthdate');
        const bioError = this.getFirstControlError('bio');

        return (<form className="Register">
            <h2>REGISTER</h2>
            <div className="form-control">
                <label>FULL NAME</label>
                <input type="text" name='fullname' onChange={this.fullnameOnChangeHandler} />
                <div className="error"><i className="fa fa-check-circle fa-lg" ></i></div>
            </div>
            <div className="form-control">
                <label>USERNAME</label>
                <input type="text" name='username' onChange={this.usernameOnChangeHandler} />
                <div className="error"><i className="fa fa-check-circle fa-lg" ></i></div>
            </div>
            <div className="form-control">
                <label>EMAIL</label>
                <input type="email" name='email' onChange={this.emailOnChangeHandler} />
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <label>PASSWORD</label>
                <input type="password" name='password' onChange={this.passwordOnChangeHandler} />
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <label>RE-PASSWORD</label>
                <input type="password" name='rePassword' onChange={this.rePasswordOnChangeHandler} />
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <label>PICTURE URL</label>
                <input type="text" name="pictureUrl" onChange={this.pictureUrlOnChangeHandler} />
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <label>DATE OF BIRTH</label>
                <input type="text" placeholder='dd/mm/yyyy' name='birthdate' onChange={this.birthdateOnChangeHandler} />
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <label>BIO</label>
                <textarea placeholder="Tell us something about yourself..." className="bio" name='bio' onChange={this.bioOnChangeHandler}></textarea>
                <div className="error"><i className="fa fa-times-circle fa-lg"></i></div>
            </div>
            <div className="form-control">
                <button type="button" onClick={this.submitHandler}>REGISTER</button>
            </div>
        </form>
        );
    }
}

const initialFormState = {
    username: '',
    password: '',
    rePassword: '',
    email: '',
    pictureUrl: '',
    bio: '',
    birthdate: '',
    fullname: ''
};

const schema = yup.object({
    username: yup.string('Username must be a string')
        .required('Username is required')
        .min(4, 'Username must be more than 4 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(6, 'Password must be more than 6 chars'),

    rePassword: yup.string('Password must be a string'),

    email: yup.string('Email should be a string')
        .required('Email is required')
        .min(6, 'Email must be more than 6 chars')
        .matches(new RegExp(/^\w+(\-\.\&)?\w+@\w+(\-\.\&)?\w+\.\w{2,}/, 'gm'), 'Invalid email format'),

    birthdate: yup.string('Birthdate must be a string')
        .required('Birthdate is required')
        .matches(new RegExp(/[0-9]{1,2}\/[0-9]{1,2}\/[1-2]{1}[0-9]{3}/, 'gm'), 'Invalid date format'),

    bio: yup.string('Bio must be a string')
        .required('Bio is required')
        .min(20, 'Bio must be more than 20 chars')
        .max(200, 'Bio must be less than 200 chars'),

    fullname: yup.string('Full name must be a string')
    .required('Full name is required')
    .matches(new RegExp(/[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/, 'gm'), 'Invalid name format: Name Surname'),

    pictureUrl: yup.string('Profile picture URL must be a string')
    .required('Profile picture url is required')
});

export default withForm(Register, initialFormState, schema);