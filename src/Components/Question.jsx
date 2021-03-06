import React, { useEffect } from "react";
import { decode } from "html-entities";

const Question = (props) => {

const allCorrect = props.allCorrect
const selected = props.selected.map(obj => obj.answer)
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

const [check, setCheck] = React.useState(false)

useEffect(() => {
    setCheck(props.check)
}, [props.check])

const styles = {
    backgroundColor: "rgb(85, 13, 179, 0.5)",
    color: "black"
}

    return ( 
        <div className="question-container">
            <li className="question">{decode(props.question)}</li>
            <ul className="answer-buttons">
            <button className={`${check && `${newAnswers[0].includes(correct) && "corrected"}`} ${check && `${selected.includes(newAnswers[0]) && !allCorrect.includes(newAnswers[0]) && "incorrect"}`}`} style={selected.includes(newAnswers[0]) ? styles : {}}  onClick={props.handleChange} name={props.question} id={newAnswers[0]}>{decode(newAnswers[0])}</button>
            <button className={`${check && `${newAnswers[1].includes(correct) && "corrected"}`} ${check && `${selected.includes(newAnswers[1]) && !allCorrect.includes(newAnswers[1]) && "incorrect"}`}`} style={selected.includes(newAnswers[1]) ? styles : {}}  onClick={props.handleChange} name={props.question} id={newAnswers[1]}>{decode(newAnswers[1])}</button>
            <button className={`${check && `${newAnswers[2].includes(correct) && "corrected"}`} ${check && `${selected.includes(newAnswers[2]) && !allCorrect.includes(newAnswers[2]) && "incorrect"}`}`} style={selected.includes(newAnswers[2]) ? styles : {}}  onClick={props.handleChange} name={props.question} id={newAnswers[2]}>{decode(newAnswers[2])}</button>
            <button className={`${check && `${newAnswers[3].includes(correct) && "corrected"}`} ${check && `${selected.includes(newAnswers[3]) && !allCorrect.includes(newAnswers[3]) && "incorrect"}`}`} style={selected.includes(newAnswers[3]) ? styles : {}}  onClick={props.handleChange} name={props.question} id={newAnswers[3]}>{decode(newAnswers[3])}</button>
            </ul>
        </div>
     );
}
 
export default Question;

//RADIO BUTTONS
//<li>
//<input onChange={props.handleChange} type="radio" id={newAnswers[0]} name={props.question} />
//<label htmlFor={newAnswers[0]}>{decode(newAnswers[0])}</label>
//</li>
//<li>
//<input onChange={props.handleChange} type="radio" id={newAnswers[1]} name={props.question} />
//<label htmlFor={newAnswers[1]}>{decode(newAnswers[1])}</label>
//</li>
//<li>
//<input onChange={props.handleChange} type="radio" id={newAnswers[2]} name={props.question} />
//<label htmlFor={newAnswers[2]}>{decode(newAnswers[2])}</label>
//</li>
//<li>
//<input onChange={props.handleChange} type="radio" id={newAnswers[3]} name={props.question} />
//<label htmlFor={newAnswers[3]}>{decode(newAnswers[3])}</label>
//</li>