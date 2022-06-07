import React from 'react';
import './style.css';

function Example(props) {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}
export default function App() {
  const [update, setUpdate] = React.useState(false);
  const handleClick = () => {
    setUpdate(!update);
  };
  const handleClick1 = () => {
    setUpdate(true);
  };
  return (
    <div>
      {update ? (
        <Example data="Hello World true" />
      ) : (
        <Example data="Hello World false" />
      )}
      <button type="button" onClick={handleClick}>
        {' '}
        Okay{' '}
      </button>
      <button type="button" onClick={handleClick1}>
        {' '}
        Okay Ones{' '}
      </button>
    </div>
  );
}
