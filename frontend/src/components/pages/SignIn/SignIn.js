import React, { useState } from 'react';
import './SignIn.css';
import { login } from '../../features/userSessionSlice';
import { useSelector, useDispatch } from 'react-redux';

export const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(login({
            username: username,
            password: password
        }));
    }

    
    return (
        <div class="back">

            <div class="div-center">

                <div class="content">

                    <h3>Login</h3>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input
                                required
                                class="form-control mt-1"
                                value={username}
                                id="exampleInputEmail1"
                                onChange={(event) => {
                                    setUsername(event.target.value)
                                }}
                                placeholder="Username" />
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                required
                                class="form-control mt-1"
                                id="exampleInputPassword1"
                                placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Login</button>
                        <hr />
                        <button type="button" class="btn btn-link">Signup</button>
                        <button type="button" class="btn btn-link">Reset Password</button>

                    </form>

                </div>


            </div>
        </div>
    )
}