import _ from 'lodash';
import { Row, Col } from 'react-bootstrap';

import Guess from './Guess';
import Keyboard from './Keyboard';

import './Board.css';

function Board() {
  const defaultLetter = { letter: null, status: null };

  const solutionWord = 'WEARY';

  const guessedLetters = {
    A: 'correct',
    C: 'wrong',
    E: 'almost',
    H: 'wrong',
    M: 'wrong',
    N: 'wrong',
    R: 'almost',
    T: 'wrong'
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
    ],
    [
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter,
      defaultLetter
    ]
  ];

  const displayTurns = _.map(turns, (turn) => <Guess guess={turn} />);

  return (
    <>
      <Row>
        <Col xs={3} />
        <Col xs={6} className='turns'>
          {displayTurns}
        </Col>
      </Row>
      <div className='keyboard'>
        <Keyboard guessedLetters={guessedLetters} />
      </div>
    </>
  );
}

export default Board;
