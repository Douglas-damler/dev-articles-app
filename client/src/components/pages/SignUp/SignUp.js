import React, { useState } from 'react';
import './SignUp.css';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/userSessionSlice';
import handwriting from '../../../images/handwriting.jpg';
import cartoonwriting from '../../../images/Inkedcartoonwriting.jpg';

export const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const isLoadingRegister = useSelector((state) => state.userSession.isRegistering);
    const hasFailedToRegister = useSelector((state) => state.userSession.hasFailedToRegister);
    const registrationSucess = useSelector((state) => state.userSession.registrationSucess);

   

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length < 5) {
            setNameError('Name cannot be less than 5 characters');
            return;
        }

        if (!name.includes(' ')) {
            setNameError('Enter your both names separated by a space');
            return;
        }

        if (/\d/.test(name)) {
            setNameError('Name cannot contain a number');
            return;
        }

        if (password.length < 8) {
            setPasswordError('Password should be 8 characters or more');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('Password do not match');
            return;
        }

        if (password.toLowerCase() === name.toLowerCase()) {
            setPasswordError('You cannot use your name as passoword');
            return;
        }
        const fullnames = name.split(' ');
        const firstname = fullnames[0];
        const secondname = fullnames[1];
        dispatch(register({
            firstname: firstname,
            secondname: secondname,
            email: email,
            password: password
        }));

    }

    if(registrationSucess) {
        history.push('/');
    }

    return (
        <div>
        <div className="sign-up">
            <h3>devArticles |<span>SignUp</span></h3>
        </div>
            <form className="sign-up-form" onSubmit={handleSubmit}>

                <div className="container">
                    <label for="name">Your full name</label>
                    <br />
                    <input 
                        placeholder="Your name"
                        type="text"
                        required="required"
                        minLength="6"
                        maxLength="30"
                        value={name}
                        onChange={(e) => {setName(e.target.value); setNameError('')}}
                    />
                    <p className="error">{nameError}</p>
                </div>

                <div className="container">
                    <label htmlFor="email">Your email address</label>
                    <br />
                    <input 
                        placeholder="Your email address"
                        type="email"
                        required="required"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className="container">
                   <label htmlFor="password"> Your password</label>
                   <br />
                   <input 
                        placeholder="Password"
                        minLength="8"
                        maxLength="10"
                        type="password"
                        required="required"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                   /> 
                </div>

                <div className="container">
                    <label htmlFor="confirm password">Confirm password</label>
                    <br />
                    <input 
                        placeholder="Repeat password"
                        type="password"
                        required="required"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value); setPasswordError('')}}
                    />
                    <p className="error">{passwordError}</p>
                </div>

                <div>
                    <button type="submit" className="submit-button" disabled={isLoadingRegister}>
                        { isLoadingRegister === false ? 'Save & Continue': (<><div className="loading-registration"></div> Processing </>)}
                    </button>
                </div>

                <div>

                </div>

            </form>

            { hasFailedToRegister === true ? (<h4 className="registration-failed">Registration failed! Check your Internet connection and try again</h4>): (<></>)}

            <div className="signup-page-arts-left">
                <div className="left-image-container">
                    <img src={cartoonwriting} alt="sign-up page arts"/>
                    <p>Sign Up for <span>free</span> today</p>
                </div>
            </div>

            <div className="signup-page-arts-right">
                <div className="right-image-container">
                    <img src={handwriting} alt="sign-up page arts" />
                    <p><span>Sign Up </span>to begin writing your ideas <br /> today and get connected to <br /> the world of develpers</p>
                </div>
            </div>

        </div>
    )
}