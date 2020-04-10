const ActionTypes = {
    Login: Symbol('[AUTH] Login'),
    LoginSuccess: Symbol('[AUTH] Login Success'),
    LoginFailure: Symbol('[AUTH] Login Failure'),
    
    Logout: Symbol('[AUTH] Logout'),
    LogoutSuccess: Symbol('[AUTH] Logout Success'),
    LogoutFailure: Symbol('[AUTH] Logout Failure')
}

const login = (user) => ({ type: ActionTypes.Login, payload: { user }});
const loginFailure = (error) => ({ type: ActionTypes.LoginFailure, payload: { error }});
const loginSuccess = (user) => ({ type: ActionTypes.LoginSuccess, payload: { user } });

const logout = () => ({ type: ActionTypes.Logout, payload: undefined});
const logoutFailure = (error) => ({ type: ActionTypes.LogoutFailure, payload: { error }});
const logoutSuccess = () => ({ type: ActionTypes.LogoutSuccess, payload: undefined });

export default {
    ActionTypes, login, loginFailure, loginSuccess, logout, logoutFailure, logoutSuccess
};