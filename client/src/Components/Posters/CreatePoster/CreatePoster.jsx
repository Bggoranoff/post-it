import React from 'react';
import './CreatePoster.css';

import * as yup from 'yup';
import withForm from '../../FormHOC/FormHOC';
import posterService from '../../services/post-service'

class CreatePoster extends React.Component {

    titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');
    categoryOnChangeHandler = this.props.controlChangeHandlerFactory('category');
    imageUrlOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
    descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) return;
        const data = this.props.getFormState();
        posterService.create(data).then(() => {
            this.props.history.push('/');
        });
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        return (
            <form className="Create">
                <h2>CREATE A POSTER</h2>
                <div className="form-control">
                    <label>TITLE</label>
                    <input type="text" name="title" onChange={this.titleOnChangeHandler} />
                </div>
                <div className="form-control">
                    <label>PRICE</label>
                    <select className="selectMenu" name="price" onChange={this.priceOnChangeHandler}>
                        <option selected disabled hidden>Choose a price...</option>
                        <option className="selectOption">Low</option>
                        <option className="selectOption">Medium</option>
                        <option className="selectOption">High</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>CATEGORY</label>
                    <select className="selectMenu" name="category" onChange={this.categoryOnChangeHandler}>
                        <option selected disabled hidden>Choose a category...</option>
                        <option className="selectOption">Urban</option>
                        <option className="selectOption">Nature</option>
                        <option className="selectOption">Art</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>IMAGE URL</label>
                    <input type="text" name="imageUrl" onChange={this.imageUrlOnChangeHandler} />
                </div>
                <div className="form-control">
                    <label>DESCRIPTION</label>
                    <textarea className="description" name="description" onChange={this.descriptionOnChangeHandler}></textarea>
                </div>
                <div className="form-control">
                    <button type="button" onClick={this.submitHandler}>POST</button>
                </div>
            </form>
        );
    }
}

const initialFormState = {
    title: '',
    price: '',
    category: '',
    imageUrl: '',
    description: ''
}

const schema = yup.object({
    title: yup.string('Title must be a string')
    .required('Title is required')
    .min(4, 'Title must be more than 4 chars'),

    price: yup.string('Price must be a string')
    .required('Price is required'),

    category: yup.string('Category must be a string')
    .required('Category is required'),

    imageUrl: yup.string('Image URL must be a string')
    .required('Image URL is required')
    .min(6, 'Image URL must be more than 6 chars'),

    description: yup.string('Description must be a string')
    .required('Description is required')
    .min(10, 'Description must be more than 10 chars')
    .max(100, 'Description must be less than 100 characters')
});

export default withForm(CreatePoster, initialFormState, schema);