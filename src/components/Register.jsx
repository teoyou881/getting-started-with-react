import React, {useState} from 'react';

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
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <>
        <div>
          <input name="name" value={input.name} onChange={onChange} placeholder={'name'}></input>
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
      </>
  );
};
export default Register;
