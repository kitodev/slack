import React, {useState} from 'react'
import './Login.css';  
import {Button} from "@material-ui/core";
import {auth, provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state, dispatch] = useState();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-320-80.jpg" 
                alt="" />
                <h1>Sing in to </h1>
                <Button onClick={signIn}>Sing in with Google</Button>
            </div>
        </div>
    )
}

export default Login;
