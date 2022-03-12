const Start = (props) => {
    return ( 
        <>
          <div className="yellow"></div>
        <div className="start-container">
            <h1>Quizical</h1>
            <p>Think you know everything? Quizical will put you to the test!</p>
            <button onClick={props.handleStart} >Start quiz</button>
        </div>
        <div className="blue"></div>
        </>
     );
}
 
export default Start;