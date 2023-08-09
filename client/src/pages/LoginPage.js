import React, { useState } from 'react';
import Login from "../components/login/login";
import Signup from "../components/login/signup";
import Logo from "../assets/Red-white-trans.png"
import "../styles/loginPage.css"

function LoginPage(){

    const [isLogin, setIsLogin] = useState(true);

    const toggleAuth = () => {
      setIsLogin(!isLogin);
    };

    return (
    
        <div className="login">
            {/* <h1>{isLogin ? 'Login here' : 'Signup'}</h1>
            {isLogin ? <Login /> : <Signup />}
            <button onClick={toggleAuth}>
            {isLogin ? 'Sign Up' : 'Log In'}
            </button> */}
            <img src={Logo} alt="logo" className='redWhiteLogo'/>
            <Login />
      </div>
    
    );

}

export default LoginPage;