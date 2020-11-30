import React from 'react';
import './Login.scss';
import {auth, provider} from '../../firebase'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = e=>{
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt="logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png" alt="written-logo" />
            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login