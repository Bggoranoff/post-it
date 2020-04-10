import React from 'react';
import Poster from './Poster/Poster';
import './Posters.css';
import PropTypes from 'prop-types';
import posterService from '../services/post-service';
import Loader from '../Loader/Loader';
function Posters({ limit }) {
    const [posters, setPosters] = React.useState(null);

    React.useEffect(() => {
        posterService.load(null, limit).then(posters => {
            setPosters(posters);
        });
    }, [limit])
    return (
        <div className="posters-container">
            <div className='title'><h2>POSTERS</h2></div>
            {posters ?
            <div>{posters.map((poster) => {
                return <Poster key={poster._id} title={poster.title} imageUrl={poster.imageUrl} category={poster.category} price={poster.price} author={poster.author.username} description={poster.description} posterId={poster._id}></Poster>
            })}</div>
            : <Loader></Loader>
            }
        </div>
    );
};

Posters.propTypes = {
    limit: PropTypes.number
}

export default Posters;