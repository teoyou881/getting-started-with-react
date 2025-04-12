import React from 'react';

export default function Button({children, text, color = 'yellow'}) {

  return (
      <button style={{backgroundColor: color}}>
        {text}-{color.toUpperCase()}
        {children ? children : null}
      </button>

  );
}
