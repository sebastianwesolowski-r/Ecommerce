import React, {useEffect, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

import './App.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import Homepage from './pages/homepage/homepage.component';

const SignInPage = lazy(() => import('./pages/signinpage/signinpage.component'));
const ContactPage = lazy(() => import('./pages/contactpage/contactpage.component'));
const Shoppage = lazy(() => import('./pages/shoppage/shoppage.component'));
const Checkoutpage = lazy(() => import('./pages/checkoutpage/checkoutpage.component'));

function App({currentUser, checkUserSession}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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
