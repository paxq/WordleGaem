import _ from 'lodash';

import Letter from './Letter';

import './Keyboard.css';

function Keyboard({ guessedLetters, addLetter }) {
  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['⏎','z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫']
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
