import React from "react";
import { decode } from "html-entities";

const Question = (props) => {

const incorrect =props.incorrect
const correct =props.correct
const allAnswers = [...incorrect, correct]
const newAnswers = allAnswers.sort((a,b) => 0.5 - Math.random());


console.log(correct)

    return ( 
        <div className="question-container">
            <li className="question">{decode(props.question)}</li>
            <div className="answer-buttons">
                <button value={newAnswers[0]}>{decode(newAnswers[0])}</button>
                <button value={newAnswers[1]}>{decode(newAnswers[1])}</button>
                <button value={newAnswers[2]}>{decode(newAnswers[2])}</button>
                <button value={newAnswers[3]}>{decode(newAnswers[3])}</button>
            </div>
        </div>
     );
}
 
export default Question;