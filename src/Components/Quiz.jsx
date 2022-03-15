import React from "react"
import { decode } from "html-entities"
import Question from "./Question"

const Quiz = (props) => {
    const [questionData, setQuestionData] = React.useState({
        questions: [],
        dataLoaded: false
    })

    const [amountCorrect,setAmountCorrect] = React.useState(0)
    const [selectedAnswers, setSelectedAnswers] = React.useState([])
    const [finalAnswers, setFinalAnswers] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState([])

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
            .then(res => res.json())
            .then(data =>
                setQuestionData({
                questions: data.results,
                dataLoaded: true
            }))
    }, [props.start])

    function handleChange(e){
        const {name, id} = e.target;
        setSelectedAnswers(prev => {
            for (let i = 0; i < prev.length; i++){
            if (prev[i].question === name){
                prev.splice(i,1)
            }
        } return[...prev, {question:name,answer:id}]})
        
    }

    function handleClick(){
        questionData.questions.map(obj => setCorrectAnswers(prev => [...prev,obj.correct_answer]))
        selectedAnswers.map(obj => setFinalAnswers(prev => [...prev, obj.answer]))
        
        finalAnswers.map(answer =>{
            correctAnswers.includes(answer) && setAmountCorrect(prevAmount => prevAmount + 1)
        } )
    }
    console.log(selectedAnswers)

console.log()
    return ( 
        <>
        <div className="small-yellow"></div>
            <div className="quiz-container">
                <ul>
                    {questionData.dataLoaded && questionData.questions.map(object => (<Question question={object.question} incorrect={object.incorrect_answers} correct={object.correct_answer} handleChange={handleChange}/>))}
                </ul>
                {questionData.dataLoaded && <button className="check-answers" onClick={handleClick}>Check answers</button>}
                    <div>{amountCorrect}/5</div>
            </div>
        <div className="small-blue"></div>
        </>
     );
}
 
export default Quiz;