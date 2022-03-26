import _ from 'lodash';

import Letter from './Letter';

import './Guess.css';

function Guess({ guess }) {
  const guess_letters = _.map(guess, (part, i) => <Letter key={i} letter={part.letter} status={part.status} />);

  return (
    <div className='Guess mb-2'>
      {guess_letters}
    </div>
  );
}

export default Guess;
