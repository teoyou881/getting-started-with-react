import React, {useRef, useState} from 'react';

//simple form
// name
// birthdate
// country
// intro

const Register = () => {

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      // focus on dom where name is
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  const countRef = useRef(0);
  const inputRef = useRef();

  return (
      <>
        <div>
          <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={'name'}></input>
        </div>
        <div>
          <input name="birth" value={input.birth} onChange={onChange} type="date"/>
        </div>
        <div>
          <select name="country" value={input.country} onChange={onChange}>
            {/*
            if there is value in option tag, it will be value, not text
            */}
            <option></option>
            <option value="kr">korea</option>
            <option>us</option>
          </select>
          {input.country}
        </div>
        <div>
          <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        </div>
        <button onClick={onSubmit}>submit</button>
      </>
  );
};
export default Register;
