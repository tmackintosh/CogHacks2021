import React from 'react';
import "./Login.css";

function Login() {
    

    
    return (
        <>
        <div class="container">
        <img src="https://cognisess.com/wp-content/uploads/2021/07/189.png"/>

        <div class="signupboxes">
            <h1><i>sign up</i></h1>

            <div class="row">
                <label class="row">Name:</label><input></input><br/>
            </div>

            <label>Email Address:</label><input></input><br/>

            <div class="row">
                <label>Password:</label><input type="password"></input><br/>
            </div>

            <label>Postcode:</label><input></input><br/>

            <div class="row">
                <label>Highest level of education:</label><input></input>
            </div>

            <div class="button">
                <button>Sign Up</button>
            </div>
        </div>

        <div class="signupboxes">
            <h1><i>log in</i></h1>

            <label>Email Address:</label><input></input><br/>

            <div class="row">
                <label>Password:</label><input type="password"></input><br/>
            </div>

            <div class="button">
                <button>Log In</button>
            </div>
        </div>

        </div>
        </>
    )
}

export default Login;