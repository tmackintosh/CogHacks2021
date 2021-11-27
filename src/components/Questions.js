import React, { useState } from 'react';
import "./Questions.css";
import RadioButton from "./RadioButton";

function Questions() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const answers = [];

    const questions = [
        "Work hands-on with objects, machines, tools, plants, or animals; Work and play outside; Use your physical or athletic abilities",
        "Observe, learn, analyse, evaluate, or solve problems; Question and explore physical, biological, or cultural happenings",
        "Express yourself creatively; Use imagination or intuition; Feel free to be inventive without limits",
        "Inform, enlighten, help, teach, counsel, or cure people; Use your skills with words to serve people",
        "Influence, persuade, lead, or manage; Reach your personal or organisational goals"
    ];

    const showLastQuestion = () => {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex-1);
    }
    
    const showNextQuestion = () => {
        if (currentIndex === 4) {
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
        if (currentIndex === 4) {
            return "Submit";
        }
        return "Next Question";
    }

    const getProgress = () => {
        return ((currentIndex+1)*20).toString();
    }

    const confirmAnswer = () => {
        /* TODO handle answers array */
        window.location.href = '/listings';
    }

    
    return (

        <div class="container">
        <img src="https://cognisess.com/wp-content/uploads/2021/07/189.png"/>
        
        <div class="progressBox">
                <progress id="progress_bar" value={getProgress()} max="100"></progress>
                <h3>{currentIndex+1}/5</h3>
        </div>
            
        <div class="questionBox">
            <h3>You will..</h3>
            <h2>{questions[currentIndex]}</h2>
            <form method="post">
                <input id="ans_1" input type="radio" name="carrier" value="ans_one" /> Strongly Agree
                <input id="ans_2" input type="radio" name="carrier" value="ans_two" /> Agree
                <input id="ans_3" input type="radio" name="carrier" value="ans_three" /> Neutral
                <input id="ans_4" input type="radio" name="carrier" value="ans_four" /> Disagree
                <input id="ans_5" input type="radio" name="carrier" value="ans_five" /> Strongly Disagree
            </form>
            <button type ="button" onClick={() => showLastQuestion()}>{getPreviousButtonText()}</button>
            <div class="divider"/>
            <button type ="button" onClick={() => showNextQuestion()}>{getNextButtonText()}</button>
        </div>
            
        </div>
    )
}

export default Questions;