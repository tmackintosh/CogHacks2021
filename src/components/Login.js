import React from 'react';
import "./Login.css";

function Login() {
    
    
    
    return (

        <div class="signupbox">
            <img src="https://th.bing.com/th/id/OIP.k7JUAqfHqrYMpFE_NEJh2gHaE8?pid=ImgDet&rs=1"/>
            <h1>Sign Up</h1>

            <div class="row">
                <label>Name:</label><input></input><br/>
            </div>

            <label>Email Address:</label><input></input><br/>

            <div class="row">
                <label>Postcode:</label><input></input><br/>
            </div>

            <label>Highest Level of Education:</label><input></input><br/>

            <button type="button">Sign Up</button>
        </div>

    )
}

export default Login;