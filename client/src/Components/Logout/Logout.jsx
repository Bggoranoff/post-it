import React from 'react';
import { StoreContext } from '../Store/Store';
import actions from '../Store/actions';

function Logout(props) {
    const { dispatch } = React.useContext(StoreContext);
    dispatch(actions.logout());
    props.history.push('/');
    return null;
}

export default Logout;