import './App.css';
import React from 'react';
import Start from './Components/Start';
import Quiz from './Components/Quiz';

function App() {

  const [start, setStart] = React.useState(false)

  function handleStart(){
    setStart(true)
  }

  return (
    <main>
      {start ? <Quiz start={start}/> : <Start handleStart={handleStart}/>}
    </main>
  );
}

export default App;
