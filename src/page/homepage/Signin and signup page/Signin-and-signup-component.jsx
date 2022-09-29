import React from "react";
import './Signin-and-signup-style.scss'
import Signin from "../../../components/signin/signin-component";
const SigninAndSignUpPage = () => {
    return(
        <div className="sign-in-and-sign-up">
           <h1>sign in</h1>
           <Signin />
        </div>
    )
}

export default SigninAndSignUpPage;