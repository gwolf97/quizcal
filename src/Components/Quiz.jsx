import React from "react"
import { decode } from "html-entities"
import Question from "./Question"

const Quiz = (props) => {
    const [questionData, setQuestionData] = React.useState({
        questions: [],
        dataLoaded: false
    })

    const [selectedAnswers, setSelectedAnswers] = React.useState({
        
    })



    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
            .then(res => res.json())
            .then(data =>
                setQuestionData({
                questions: data.results,
                dataLoaded: true
            }))
    }, [props.start])

    console.log(questionData.questions)

    return ( 
        <>
        <div className="small-yellow"></div>
            <div className="quiz-container">
                <ul>
                    {questionData.dataLoaded && questionData.questions.map(object => (<Question question={object.question} incorrect={object.incorrect_answers} correct={object.correct_answer}/>))}
                </ul>
                {questionData.dataLoaded && <button className="check-answers">Check answers</button>}
            </div>
        <div className="small-blue"></div>
        </>
     );
}
 
export default Quiz;