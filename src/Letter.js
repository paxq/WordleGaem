import _ from 'lodash';

import './Letter.css';

function Letter({ letter, status, addLetter }) {
  let statusClass = 'empty';
  if (letter && status) {
    statusClass = status;
  }
  const className = `Letter Letter--${statusClass} mx-1`;

  return (
    <div className={className} onClick={() => { if (_.isFunction(addLetter)) { addLetter(letter) } }}>
      {_.capitalize(letter)}
    </div>
  );
}

export default Letter;
