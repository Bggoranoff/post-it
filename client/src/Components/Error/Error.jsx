import React from 'react';
import './Error.css';

function Error(props) {
    return <div className="error-container">
        <img className = "error-image" src="https://img.icons8.com/pastel-glyph/2x/error.png" />
        <br />
        <h2>OOPS! SOMETHING WENT WRONG!</h2>
    </div>
}

export default Error;