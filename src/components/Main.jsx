import React from 'react';
import './Main.css';
import Button from './Button.jsx';
/*
  * Only JavaScript expressions are allowed inside curly braces ({})
    → It must be something that evaluates to a value.

    Only numbers, strings, and arrays can be rendered to the screen
    → boolean, undefined, null, and objects won’t be displayed.

    All tags must be properly closed
    → Self-closing tags like <img />, <input /> must include the slash.

    JSX must have a single top-level tag
    → Wrap multiple elements in a parent element like a <div> or <>.
* */
export default function Main() {
  const user = {
    name: 'test',
    isLogin: true,
  };

  const buttonProps = {
    text: 'logout',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };

  return (
      <>
        <Button {...buttonProps}/>
        <Button text={'cafe'}/>
        <Button text={'blog'}>
          <div>children</div>
        </Button>
      </>
  );
}