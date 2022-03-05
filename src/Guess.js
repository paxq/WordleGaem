import _ from 'lodash';
import { Row, Col } from 'react-bootstrap';

import Letter from './Letter';

import './Guess.css';

function Guess({ guess }) {
  const guess_letters = _.map(guess, (part) => {
    return (
      <Col xs={2} className='mx-auto'>
        <Letter letter={part.letter} status={part.status} />
      </Col>
    )
  });

  return (
    <Row className='Guess'>
      <Col />
      {guess_letters}
      <Col />
    </Row>
  );
}

export default Guess;
