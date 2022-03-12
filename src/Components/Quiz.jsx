import React from "react"
import Question from "./Question"

const Quiz = (props) => {
    const [questionData, setQuestionData] = React.useState({
        questions: [],
        dataLoaded: false
    })

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
            .then(res => res.json())
            .then(data => setQuestionData({
                questions: data.results,
                dataLoaded: true
            }))
    }, [props.start])

    function renderQuestions(){
    
    }

    return ( 
        <div className="quiz-container">
            <ul>
                {questionData.dataLoaded && questionData.questions.map(object => (<li>{object.question}</li>))}
            </ul>
        </div>
     );
}
 
export default Quiz;