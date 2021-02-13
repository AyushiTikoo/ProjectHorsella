import React from 'react';
import './Login.css';
import imageName from '../../assets/img/logo_bg.png';

const Login = () =>{
    return(
        <div>
            <div style={{backgroundColor:"#1bbd36",padding:"10px",marginTop:"80px"}}>
            <h2><b style={{color:"white"}}>LOGIN</b></h2>
          </div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form p-l-55 p-r-55 p-t-40 p-b-40">
                            <div className="logo-container m-b-32">
                                <img className="logo" src={imageName} />
                            </div>
                            <div className="wrap-input100 validate-input m-b-16 mx-auto" data-validate="Please enter username">
                                <input className="input100" type="text" name="username" placeholder="Username" autocomplete="off"/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-40 mx-auto" data-validate = "Please enter password">
                                <input className="input100" type="password" name="pass" placeholder="Password" autocomplete="off"/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="container-login100-form-btn m-auto">
                                <button className="login100-form-btn" id ="button">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Login;