import React from 'react';
import posterService from '../services/post-service';
function Delete(props) {
    posterService.delete(props.match.params.id).then(() => {
        props.history.push('/');
    })
    .catch(() => {
        props.history.push('/error');
    });

    return null;
}

export default Delete;