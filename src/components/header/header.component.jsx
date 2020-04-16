import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Link} from 'react-router-dom';

import {ReactComponent as CartIcon} from '../../assets/carticon.svg';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';

import './header.styles.scss';

const Header = ({currentUser, signOutStart}) => (
    <div className="header">
        <Link to="/contact">
            <div className="contact">Contact</div>
        </Link>
        <Link to="/">
            <div className="company-name">
                Clothing Company
            </div>
        </Link>
        <div className="user-panel">
            {currentUser ? 
                (
                    <div className="user-panel-item" onClick={signOutStart}>Sign Out</div>
                ) : (
                    <Link to="/signin">
                        <div className="user-panel-item">Sign In</div>
                    </Link>
                )
            }
            <Link to="/checkout">
                <div className="user-panel-item"><CartIcon /></div>
            </Link>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);