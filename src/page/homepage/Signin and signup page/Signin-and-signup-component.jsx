import React from "react";
import './Signin-and-signup-style.scss'
import Signin from "../../../components/signin/signin-component";
import SignUp from "../../../components/signup/signup-component";

const SigninAndSignUpPage = () => {
    return(
        <div className="sign-in-and-sign-up">
           <Signin />
           <SignUp />
        </div>
    )
}

export default SigninAndSignUpPage;