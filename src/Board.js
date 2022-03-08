import _ from 'lodash';
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';

import Guess from './Guess';
import Keyboard from './Keyboard';

import './Board.css';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

function Board() {
  const [currentTurn, setCurrentTurn] = useState(3);
  const defaultLetter = { letter: null, status: null };
  const [currentWord, setCurrentWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState({
    A: 'correct',
    C: 'wrong',
    E: 'almost',
    H: 'wrong',
    M: 'wrong',
    N: 'wrong',
    R: 'almost',
    T: 'wrong',
    F: 'wrong',
    I: 'wrong',
    L: 'wrong',
    K: 'wrong'
  });
  const [turns, setTurns] = useState([
    [
      {letter: 'M', status: 'wrong' },
      {letter: 'A', status: 'almost' },
      {letter: 'T', status: 'wrong' },
      {letter: 'C', status: 'wrong' },
      {letter: 'H', status: 'wrong' }
    ],
    [
      {letter: 'C', status: 'wrong' },
      {letter: 'R', status: 'almost' },
      {letter: 'A', status: 'correct' },
      {letter: 'N', status: 'wrong' },
      {letter: 'E', status: 'almost' }
    ],
    [
      {letter: 'F', status: 'wrong' },
      {letter: 'L', status: 'wrong' },
      {letter: 'I', status: 'wrong' },
      {letter: 'C', status: 'wrong' },
      {letter: 'K', status: 'wrong' }
    ],
    [
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter
    ],
    [
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter
    ],
    [
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter
    ]
  ]);
  const maxLetters = 5;
  
  const addLetterToCurrentWord = (letter) => {
    if (letter == '⏎') {
      if (currentWord.length == maxLetters) {
        submitGuess();
      }
    }
    else
    if (letter == '⌫') {
      if (currentWord.length > 0) {
        const newCurrentWord = _.clone(currentWord);
      console.log('popLetterToCurrentWord()');
      newCurrentWord.pop(letter);
      setCurrentWord(newCurrentWord);
      console.log({ currentWord, newCurrentWord });
      updateCurrentTurn(newCurrentWord);
      }
    }
    else 
    if (currentWord.length < maxLetters)
    {
      const newCurrentWord = _.clone(currentWord);
      console.log('addLetterToCurrentWord()', letter, newCurrentWord);
      newCurrentWord.push(letter);
      setCurrentWord(newCurrentWord);
      console.log({ currentWord, newCurrentWord });
      updateCurrentTurn(newCurrentWord);
    }
    
  };

  const submitGuess = () => {
    console.log("guess submitted!");
    
  }
  const updateCurrentTurn = (newCurrentWord) => {
    const newTurns = _.clone(turns);
    const newTurn = _.map(newCurrentWord, (letter) => { return { letter, status: null } });
    newTurns[currentTurn] = newTurn;
    setTurns(newTurns);
  }

  const solutionWord = 'WEARY';

  

  const displayTurns = _.map(turns, (turn, i) => <Guess guess={turn} key={i} />);

  return (
    <>
      <Row>
        <Col xs={3} />
        <Col xs={6} className='turns'>
          {displayTurns}
        </Col>
      </Row>
      <div className='keyboard'>
        <Keyboard guessedLetters={guessedLetters} addLetter={addLetterToCurrentWord}/>
      </div>
    </>
  );
}

export default Board;
