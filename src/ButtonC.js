import React from 'react'

export default function ButtonC({onClick,children}) {
  return (
        <button onClick={onClick}>{children}</button>
  );
}
