
import _ from 'lodash';
import { useState } from "react";
import { Row, Col } from 'react-bootstrap';

import Guess from './Guess';
import Keyboard from './Keyboard';

import './Board.css';

function Board() {
  const defaultLetter = { letter: null, status: null };
  const [currentWord, setCurrentWord] = useState([]);
  const maxLetters = 5;

  const addLetterToCurrentWord = (letter) => {
    if (currentWord.length < maxLetters)
    {
    console.log('addLetterToCurrentWord()', letter);
    const newCurrentWord = _.clone(currentWord);
    newCurrentWord.push(letter);
    setCurrentWord(newCurrentWord);
    console.log({ currentWord });
    }
    

  };

  const solutionWord = 'WEARY';

  const guessedLetters = {
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
  };

  const turns = [
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
  ];

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
        <Keyboard guessedLetters={guessedLetters} addLetter={addLetterToCurrentWord} />
      </div>
    </>
  );
}

export default Board;
