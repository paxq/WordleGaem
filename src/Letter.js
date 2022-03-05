import './Letter.css';

function Letter({ letter, status }) {
  let className = 'empty';
  if (letter && status) {
    className = status;
  }

  return (
    <div className={`Letter Letter--${className}`}>
      {letter}
    </div>
  );
}

export default Letter;
