import _ from 'lodash';

import './Letter.css';

function Letter({ letter, status, addLetter }) {
  let className = 'empty';
  if (letter && status) {
    className = status;
  }

  return (
    <div className={`Letter Letter--${className}`} onClick={() => { if (_.isFunction(addLetter)) { addLetter(letter) } }}>
      {_.capitalize(letter)}
    </div>
  );
}

export default Letter;
