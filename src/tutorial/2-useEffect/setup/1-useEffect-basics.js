import React, { useState, useEffect, isValidElement } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useeffect')
    if(value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, []) // [] means it will only run on the very first render
  
  console.group('render component')
  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}> 
      click me
    </button>
    </>
  )
};

export default UseEffectBasics;
