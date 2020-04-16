import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';

import Homepage from './pages/homepage/homepage.component';
import SignInPage from './pages/signinpage/signinpage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import Shoppage from './pages/shoppage/shoppage.component';
import Checkoutpage from './pages/checkoutpage/checkoutpage.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import './App.css';

function App({currentUser, checkUserSession}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/checkout" component={Checkoutpage} />
        <Route exact path="/signin" render={() => currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInPage />
            )
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
