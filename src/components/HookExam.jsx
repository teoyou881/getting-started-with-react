import React from 'react';
import UseInput from '../hooks/UseInput.jsx';

// 3 tips for using hooks

// 1. only can call hooks inside function component, custom hooks
// const state = useState();
// ==> Invalid hook call. Hooks can only be called inside of the body of a function component

// 2. cannot call hooks inside conditional statements

// 3. can create custom hooks

const HookExam = () => {
  const [input, onChange] = UseInput();
  return (
      <input onChange={onChange} value={input}/>
  );
};
export default HookExam;
