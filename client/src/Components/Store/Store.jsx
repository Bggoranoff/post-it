import React from 'react';
import actions from './actions';
import userService from '../services/user-service';

export const StoreContext = React.createContext({});

const initialState = {
    user: undefined,
    error: null
};

function init(state) {
    return initialState;
}

const asyncActionMap = {
    [actions.ActionTypes.Login]: function({ user }) {
        return userService.login(user)
        .then(user => actions.loginSuccess(user))
        .then(error => actions.loginFailure(error));
    },
    [actions.ActionTypes.Logout]: function() {
        return userService.logout()
        .then(() => actions.logoutSuccess())
        .catch(error => actions.logoutFailure(error))
    }
};

const actionMap = {
    [actions.ActionTypes.Login]: function(state) {
        return { ...state, error: null };
    },
    [actions.ActionTypes.LoginSuccess]: function(state, { user }) {
        console.log(user);
        return { ...state, user };
    },
    [actions.ActionTypes.LogoutSuccess]: function(state) {
        return { ...state, user: null };
    },
    [actions.ActionTypes.LogoutFailure]: function(state, { error }) {
        return { ...state, error };
    }
};

const storeReducer = function(state, action) {
    const handler = actionMap[action.type];
    return handler ? handler(state, action.payload) : state;
};

const Store = function({ children }) {
    const [state, dispatch] = React.useReducer(storeReducer, initialState, init);

    const store = React.useMemo(function() {
        return {
            state,
            dispatch: function(action) {
                const asyncActionHandler = asyncActionMap[action.type];
                if (asyncActionHandler) {
                    asyncActionHandler(action.payload).then(dispatch);
                }
                dispatch(action);
            }
        }
    }, [state, dispatch]);

return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};

export default Store;