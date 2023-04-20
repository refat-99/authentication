import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import useFirebase from "../../hooks/useFirebase";

const Login = () =>{
    const {user,signInUsingGoogle} = useFirebase();
    return(
        <div className="login">
            <div >
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Your Email"/>
                    <br/> <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <br/>
                    <button className="btn-regular">Login</button>
                </form>
                <p>New to ema-john
                     <Link to="/register">Create Account</Link>
                     </p>
                     <div>---------------or---------------</div>
                     <button
                     onClick={signInUsingGoogle}
                      className="btn-regular">Google Sign In</button>
            </div>
        </div>
    )
}

export default Login;