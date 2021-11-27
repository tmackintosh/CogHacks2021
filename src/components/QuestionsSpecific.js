import { refEqual } from '@firebase/firestore';
import React, { useState } from 'react';
import "./QuestionsSpecific.css";
import RadioButton from "./RadioButton";
import { useEffect } from 'react';
//import {doc, getDoc} from 'firebase';
import { doc, getDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

function QuestionsSpecific() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const answers = [];
    const [response, setResponse] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');

    const handleResponseInput = event => {
        setResponse(event.target.value);
    }

    useEffect(() => {
        //alert("Working?")
        getQ();
      })

    const getQ = () => {

        //alert("Working 2")

        const docSnap = getDoc(doc(getFirestore(), "Question_for_listings", "Job1")).then(docSnap => {
       // alert(docRef)
       // const docSnap = getDoc(docRef);
        //alert(docSnap.data())
        //alert(docSnap.data()['Q1'])
        setQuestion1(docSnap.data()['Q1'])
        setQuestion2(docSnap.data()['Q2'])
        setQuestion3(docSnap.data()['Q3'])
         //if (docSnap.exists()) {
        //alert("Document data:", docSnap.data());
         //} else {
         // doc.data() will be undefined in this case
         //console.log("No such document!");
        })
     
 }


    const questions = [
        question1,
        question2,
        question3
    ];

    const showLastQuestion = () => {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex-1);
    }
    
    const showNextQuestion = () => {

        if (currentIndex === 2) {
            confirmAnswer();
            return;
        }
        setCurrentIndex(currentIndex+1);
    }

    const getPreviousButtonText = () => {
        if (currentIndex === 0) {
            return "Exit";
        }
        return "Previous Question";
    }

    const getNextButtonText = () => {
        if (currentIndex === 2) {
            return "Submit";
        }
        return "Next Question";
    }

    const getProgress = () => {
        return ((currentIndex+1)*(100/3)).toString();
    }

    const confirmAnswer = () => {
        window.location.href = '/showEmployer';
        /* TODO handle answers array */
    }

    
    return (

        <div class="container">
        <img src="https://cognisess.com/wp-content/uploads/2021/07/189.png"/>
        
        <div class="progressBox">
                <progress id="progress_bar" value={getProgress()} max="100"></progress>
                <h3>{currentIndex+1}/3</h3>
        </div>
            
        <div class="questionBox">
            <h2>{questions[currentIndex]}</h2>
            
            <label>Response:</label>
            <input  
            type={response} id="response" onChange={handleResponseInput}
            // onChange={e => setPassword(e.detail.value)}
            >
            </input> 
            <br/>
            
            <button type ="button" onClick={() => showLastQuestion()}>{getPreviousButtonText()}</button>
            <div class="divider"/>
            <button type ="button" onClick={() => showNextQuestion()}>{getNextButtonText()}</button>
        </div>
            
        </div>
    )
}

export default QuestionsSpecific;