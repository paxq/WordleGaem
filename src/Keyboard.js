import _ from 'lodash';

import Letter from './Letter';

import './Keyboard.css';

function Keyboard({ guessedLetters, addLetter }) {
  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ];

  const statusFor = (letter) => _.get(guessedLetters, letter, 'empty');

  const renderRow = (row) => {
    return _.map(row, (letter) => <Letter letter={letter} status={statusFor(letter)} addLetter={addLetter} key={letter} />);
  };

  const keyboardRows = _.map(keyboard, (row, i) => {
    return (
      <div className='KeyboardRow' key={i}>
        {renderRow(row)}
      </div>
    );
  });

  return (
    <div className='Keyboard'>
      {keyboardRows}
    </div>
  );
}

export default Keyboard;
