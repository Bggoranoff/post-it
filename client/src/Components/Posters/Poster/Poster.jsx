import React from 'react';
import './Poster.css';

function PosterImage({ title, image, posterId }) {
    return (
        <a href={`poster/${posterId}`}>
            <img src={image} title={title} className='product-image' />
        </a>
    );
}

function PosterCaption({ author, title, price }) {
    return (
        <div className="caption">
            <span className="product-title">{title}</span>
            <br />
            <span className="product-brand">Author: {author}</span>
            <br />
            <div className="product-price">Price: <span>${price}</span></div>
        </div>
    );
}

function Poster({ title, price, imageUrl, posterId, description, category, author }) {
    return (
        <div className='product-container'>
            <PosterImage image={imageUrl} title={title} posterId={posterId} />
            <br />
            <hr className="divider" />
            <PosterCaption author={author} title={title} price={price} />
        </div>
    );
}

export default Poster;