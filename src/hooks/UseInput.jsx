import {useState} from 'react';

const UseInput = () => {

  const [input, setInput] = useState('');
  const onChange          = (e) => setInput(e.target.value);

  return [input, onChange];
};
export default UseInput;