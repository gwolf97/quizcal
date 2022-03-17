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
    const [check, setCheck] = React.useState(false)

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
            .then(res => res.json())
            .then(data =>
                setQuestionData({
                questions: data.results,
                dataLoaded: true
            }))
    }, [props.start])

    React.useEffect(()=>{
        finalAnswers.map(answer =>{
            correctAnswers.includes(answer) && setAmountCorrect(prevAmount => prevAmount + 1)
        } )
    },[finalAnswers])

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
        setCheck(true)
        questionData.questions.map(obj => setCorrectAnswers(prev => [...prev,obj.correct_answer]))
        selectedAnswers.map(obj => setFinalAnswers(prev => [...prev, obj.answer]))
    }
    console.log(questionData)

console.log()
    return ( 
        <>
        <div className="small-yellow"></div>
            <div className="quiz-container">
                <ul>
                    {questionData.dataLoaded && questionData.questions.map(object => (<Question key={object.question} question={object.question} incorrect={object.incorrect_answers} correct={object.correct_answer} handleChange={handleChange} selected={selectedAnswers}/>))}
                </ul>
                    <div className="controls">
                    {questionData.dataLoaded && !check && <button className="check-answers" onClick={handleClick}>Check answers</button>}
                    {check && <div>You got {amountCorrect}/5 answers correct</div>}
                    {check && <button className="check-answers">New quiz</button>}
                    </div>
            </div>
        <div className="small-blue"></div>
        </>
     );
}
 
export default Quiz;