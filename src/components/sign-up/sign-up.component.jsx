import React, {useState} from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {
    const [userData, setData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userData;

    const handleChange = event => {
        const {name, value} = event.target;
        setData({...userData, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords didn't match");
            return;
        }

        signUpStart({displayName, email, password});
    }

    return (
        <div className="sign-up">
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" label="Display Name" handleChange={handleChange} value={displayName} required/>
                <FormInput type="email" name="email" label="Email" handleChange={handleChange} value={email} required/>
                <FormInput type="password" name="password" label="Password" handleChange={handleChange} value={password} required/>
                <FormInput type="password" name="confirmPassword" label="Confirm Password" handleChange={handleChange} value={confirmPassword} required/>
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);