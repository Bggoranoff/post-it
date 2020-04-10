import React from 'react';
import * as RouterDOM from 'react-router-dom';

function Link({ to, children }) {
    return <RouterDOM.Link to={to}>{children}</RouterDOM.Link>;
}

export default Link;