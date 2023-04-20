import React from "react";
import { Link } from "react-router-dom";

const Register = () =>{
    return(
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form>
                    <input type="text" placeholder="Your Name"/> <br/>
                    <input type="email" placeholder="Your Email"/> <br/>
                    <input type="password" placeholder="Type Strong Password"/> <br/>
                    <input type="password" placeholder="Type Strong Password"/> <br/> <br/>
                    <button className="btn-regular"> Submit</button>

                </form>
                <p>Already Have an Account <Link to="/login">Login</Link></p>
                <div>---------------or---------------</div>
                     <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    )
}

export default Register;