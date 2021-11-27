import React from 'react';
import "./Login.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

function Login() {

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1o5seIhKEY17K8dRy0KKV62jryaor4aE",
  authDomain: "coghacks2021.firebaseapp.com",
  projectId: "coghacks2021",
  storageBucket: "coghacks2021.appspot.com",
  messagingSenderId: "272991366590",
  appId: "1:272991366590:web:bb1a94953685be2bb39def"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig);

const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [signingUp, setSigningUp] = useState(false);

const handlePasswordInput = event => {
    setPassword(event.target.value);
}

const handleEmailInput = event => {
    setEmail(event.target.value);
}

const pressedSignUp = event => {
    //setSigningUp(true);
    signUp();
}

const signUp = () => {
    //pressedSignUp();
    const auth = getAuth();
    //if (signingUp === true) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("Signed In")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + password)
            // ..
        
        });
    //}   
}
    
    
    return (
        <div class="container">
            <img src="https://cognisess.com/wp-content/uploads/2021/07/189.png"/>
            <div class="signupboxes">
                <h1><i>sign up</i></h1>
                {/* <form onSubmit={signUp}>  */}
                
                <div class="row">
                    <label class="row">Name:</label><input></input><br/>
                </div>

                <label>Email Address:</label><input id="email" onChange={handleEmailInput}></input><br/>
                
                <div class="row">
                    <label>Password:</label>
                    <input  
                    type={password} id="password" onChange={handlePasswordInput}
                    // onChange={e => setPassword(e.detail.value)}
                    >
                    </input> 
                    <br/>
                </div>

                <label>Postcode:</label><input></input><br/>

                <div class="row">
                    <label>Highest level of education:</label><input></input>
                </div>

                <div class="button">
                    <button onClick={pressedSignUp()}>Sign Up</button>
                </div>

                {/* </form> */}

            </div>
            

            <div class="signupboxes">
                <h1><i>log in</i></h1>

                <label>Email Address:</label><input></input><br/>

                <div class="row">
                    <label>Password:</label><input></input><br/>
                </div>

                <div class="button">
                    <button>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login;