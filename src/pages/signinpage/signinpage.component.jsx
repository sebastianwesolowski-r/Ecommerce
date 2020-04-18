import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectProcessing} from '../../redux/user/user.selectors';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signinpage.styles.scss';

const SignInPage = ({isProcessing}) => (
    <div className="wrapper">
        <div className="sign-in-page">
            <SignIn />
            <SignUp />
        </div>
        {
            isProcessing ? (
                <div className="processing">
                    <div className="SpinnerContainer"></div>    
                </div>
            ) : null
        }  
    </div>
);

const mapStateToProps = createStructuredSelector({
    isProcessing: selectProcessing
});

export default connect(mapStateToProps)(SignInPage);