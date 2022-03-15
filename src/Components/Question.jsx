import React, { useEffect } from "react";
import { decode } from "html-entities";

const Question = (props) => {


    
    

const incorrect = props.incorrect
const correct = props.correct
let allAnswers = [...incorrect, correct]
let newAnswers = allAnswers

useEffect(()=>{
    function shuffle(){
         allAnswers.sort((a,b) => 0.5 - Math.random());
    }
    shuffle()
}, [])

//useEffect(() =>{
  //  let answer = selectedAnswers.slice(-1)[0] 
    //console.log(answer)
//},[selectedAnswers])






//<button onClick={props.answerChosen} value={newAnswers[0]}>{decode(newAnswers[0])}</button>
//<button onClick={props.answerChosen} value={newAnswers[1]}>{decode(newAnswers[1])}</button>
//<button onClick={props.answerChosen} value={newAnswers[2]}>{decode(newAnswers[2])}</button>
//<button onClick={props.answerChosen} value={newAnswers[3]}>{decode(newAnswers[3])}</button>

    return ( 
        <div className="question-container">
            <li className="question">{decode(props.question)}</li>
            <ul className="answer-buttons">
            <li>
    <input onChange={props.handleChange} type="radio" id={newAnswers[0]} name={props.question} />
    <label htmlFor={newAnswers[0]}>{decode(newAnswers[0])}</label>
  </li>
  <li>
    <input onChange={props.handleChange} type="radio" id={newAnswers[1]} name={props.question} />
    <label htmlFor={newAnswers[1]}>{decode(newAnswers[1])}</label>
  </li>
  <li>
    <input onChange={props.handleChange} type="radio" id={newAnswers[2]} name={props.question} />
    <label htmlFor={newAnswers[2]}>{decode(newAnswers[2])}</label>
  </li>
  <li>
    <input onChange={props.handleChange} type="radio" id={newAnswers[3]} name={props.question} />
    <label htmlFor={newAnswers[3]}>{decode(newAnswers[3])}</label>
  </li>
            </ul>
        </div>
     );
}
 
export default Question;