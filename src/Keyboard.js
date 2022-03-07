import _ from 'lodash';

import Letter from './Letter';

import './Keyboard.css';

function Keyboard({ guessedLetters }) {
  const keyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const statusFor = (letter) => {
    return 'empty';
  }

  const renderRow = (row) => {
    return _.map(row, (letter) => <Letter letter={letter} status={statusFor(letter)} />);
  };

  const keyboardRows = _.map(keyboard, (row) => {
    return (
      <div className='KeyboardRow'>
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
