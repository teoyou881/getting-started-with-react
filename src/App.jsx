import './App.css';
import {useState} from 'react';

const Bulb = ({light}) => {
  return (
      <div>
        {light === 'ON' ? (
            <h1 style={{backgroundColor: 'red'}}>ON</h1>
        ) : (
            <h1 style={{backgroundColor: 'gray'}}>OFF</h1>
        )}
      </div>
  );
};

function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
      <>
        <Bulb light={light}/>
        <button onClick={() => setLight(light === 'ON' ? 'OFF' : 'ON')}>{light === 'ON' ? 'OFF' : 'ON'}</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </>
  );
}

export default App;
