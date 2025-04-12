import React from 'react';

export default function Button({children, text, color = 'yellow'}) {

  const onMouseEnter = (e) => {
    console.log(e);
    console.log('onMouseEnter');
  };

  return (
      <button
          onClick={() => {
            console.log(text);
          }}
          onMouseEnter={onMouseEnter}
          style={{backgroundColor: color}}>
        {text}-{color.toUpperCase()}
        {children ? children : null}
      </button>

  );
}
