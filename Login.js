import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
        <div className="login__container">
        <img src="data:image/png;base64,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" alt=""
         />
        <div className="login__text">
            <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
            Sign in with Google 
        </Button>    
        </div>
        
        </div>
    );
}

export default Login
