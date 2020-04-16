import React, {useState} from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userData, setData] = useState({email: '', password: ''});
    const {email, password} = userData;

    const handleChange = event => {
        const {value, name} = event.target;
        setData({...userData, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
        console.log(email, password);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" label="Email" value={email} onChange={handleChange} required/>
                <FormInput name="password" type="password" label="Password" value={password} onChange={handleChange} required/>
                <div className="buttons">    
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} googleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
});

export default connect(null, mapDispatchToProps)(SignIn);