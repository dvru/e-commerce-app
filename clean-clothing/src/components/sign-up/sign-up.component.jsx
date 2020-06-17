import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import  './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword}

    if(password === confirmPassword) {
        alert("passwords don't match");
        return;
    }

    try{

    } catch {

    }
}



    render() {
        const { displayName, email, password, confirmPassword}
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleSubmit}
                label='Display Name'
                required
                />
                 <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleSubmit}
                label='Email'
                required
                />
                     <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleSubmit}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleSubmit}
                label='Confirm Password'
                required
                />
                <CustomButton
                    type='submit'>SIGN UP</CustomButton>
            </form>
            </div>
        )
    }
}

export default SignUp;