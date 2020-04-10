import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
import Footer from './Components/Footer/Footer';
import Posters from './Components/Posters/Posters';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Edit from './Components/Edit/Edit';
import CreatePoster from './Components/Posters/CreatePoster/CreatePoster';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Store, { StoreContext } from './Components/Store/Store';
import actions from './Components/Store/actions';
import Details from './Components/Posters/Details/Details';
import Profile from './Components/Profile/Profile';
import Delete from './Components/Delete/Delete';
import Error from './Components/Error/Error';

function render(Cmp) {
  return function (props) {
    return <Auth><Cmp {...props} /></Auth>;
  }
}

const Auth = ({ children }) => {
  const { dispatch, state } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch('http://localhost:9999/auth', { credentials: 'include' })
      .then(res => res.status === 200 ? res.json() : res.text().then(text => Promise.reject(text)))
      .then(user => dispatch(actions.loginSuccess(user)))
      .catch(() => {
        dispatch(actions.loginSuccess(null));
      });
  }, []);
  return <>{children}</>;
}



function App() {

  return (

    <BrowserRouter>
      <Store>
        <Auth>
          <StoreContext.Consumer>
            {({ state }) => {
              const { user } = state;
              const isLogged = !!state.user;
              return user === undefined ? (
                <Loader />
              ) : (
                  <div className="App">
                    <Header isLogged={isLogged} user={user} />
                    <div className="Main">
                      <Switch>
                        <Route path="/" exact><Redirect to="/posters" /></Route>
                        <Route path="/posters" render={render(Posters)} />
                        <Route path="/login" render={!isLogged ? render(Login) : () => <Redirect to='/error' />} />
                        <Route path="/register" render={!isLogged ? render(Register) : () => <Redirect to='/error' />} />
                        <Route path="/edit-poster" render={isLogged ? render(Edit) : () => <Redirect to='/error' />} />
                        <Route path="/create-poster" render={isLogged ? render(CreatePoster) : () => <Redirect to='/error' />} />
                        <Route path="/about" render={render(About)} />
                        <Route path="/logout" render={isLogged ? render(Logout) : () => <Redirect to='/error' />} />
                        <Route path="/poster/:id" render={(props) => <Details user={user} {...props} />} />
                        <Route path="/profile/:id" render={isLogged ? () => <Profile user={user} /> : () => <Redirect to='/error' />} />
                        <Route path="/delete/:id" render={isLogged ? render(Delete) : () => <Redirect to='/error' />} />
                        <Route path="*" render={render(Error)} />
                      </Switch>
                    </div>
                    <Footer isLogged={isLogged} />
                  </div>
                );
            }}
          </StoreContext.Consumer>
        </Auth>
      </Store>
    </BrowserRouter>
  );
}

export default App;
