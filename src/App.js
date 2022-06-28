import Board from './components/Board'
import { useState } from 'react';
import './styles/App.css'

function App(props) {
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [arrVal, setArrVal] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [value, setValue] = useState({val1: arrVal[0], val2: arrVal[1], val3: arrVal[2], val4: arrVal[3], val5: arrVal[4], val6: arrVal[5], val7: arrVal[6], val8: arrVal[7], val9: arrVal[8], val10: arrVal[9], val11: arrVal[10], val12: arrVal[11]});
  const [valTaken, setValTaken] = useState([]);

  document.title = 'Memory Card'

  const shuffle = () => {
    let tempArr = arrVal;
    setArrVal(tempArr.sort(() => Math.random() - 0.5));
    setValue({val1: arrVal[0], val2: arrVal[1], val3: arrVal[2], val4: arrVal[3], val5: arrVal[4], val6: arrVal[5], val7: arrVal[6], val8: arrVal[7], val9: arrVal[8], val10: arrVal[9], val11: arrVal[10], val12: arrVal[11]});
  };

  const isTaken = (e) => {
    let tempArr = valTaken;
    if(tempArr.indexOf(e.target.value) === -1) {
      tempArr.push(e.target.value);
      setValTaken(tempArr);
      setActualScore(actualScore+1);
    } else {
      setActualScore(0);
      setValTaken([]);
    }
  };

  const updateBestScore = () => {if(actualScore > bestScore) setBestScore(actualScore)};

  const game = (e) => {
    shuffle();
    isTaken(e);
    updateBestScore();
  }

  return (
    <div className="App">
      <div className='scoreboard'>
        <div>ACTUAL SCORE: {actualScore} - RECORD SCORE: {bestScore}</div>
      </div>
      
      <Board 
        value={value}
        game={game}
      />
    </div>
  );
}

export default App;
