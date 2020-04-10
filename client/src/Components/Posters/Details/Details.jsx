import React from 'react';
import './Details.css';
import posterService from '../../services/post-service';

function DetailsImage({ title, image }) {
    return (
        <a href="#">
            <img src={image} title={title} />
        </a>
    );
}

function DetailsCaption({ author, title, price, description, user, posterId }) {
    return (
        <div className="caption">
            <span className="product-title">{title}</span>
            <br />
            <span className="product-brand">Author: {author.username}</span>
            <br />
            <div className="product-price">Price: <span>${price}</span></div>
            <br />
            <span className='product-description'>{description}</span>
            <br />
            <br />
            {user ? (user.username === author.username ? <a href={`/delete/${posterId}`} className='actionbtn deletebtn'>DELETE</a> : <a href='/' className='actionbtn buybtn'>BUY</a>) : <a href='/' className='actionbtn buybtn'>BUY</a>}
        </div>
    );
}

class Details extends React.Component {
    state = {
        poster: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        posterService.load(id).then(poster => {
            this.setState({ poster });
        });
    }

    render() {
        const { poster } = this.state;
        console.log(poster ? poster._id.toString() : undefined);
        return poster && (
            <div className='container'>
            <DetailsImage image={poster.imageUrl} title={poster.title} />
            <br />
            <hr className="divider" />
            <DetailsCaption posterId={poster._id} author={poster.author} title={poster.title} price={poster.price} description={poster.description} user={this.props.user} />
        </div>
        );
    }
}

export default Details;