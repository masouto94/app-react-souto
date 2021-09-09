import React, { useState } from 'react';

export const CounterButtonRemove = (props) => {
  const [count, setState] = useState(sessionStorage.getItem(`cuenta_${props.id}`));
  const [date, setDate] = useState(Date());
  
  const countHandler = () => {
    if(count > 1){
    setState(count - 1);
    sessionStorage.setItem(`cuenta_${props.id}`,count)
    setDate(Date());
    console.log(count, date)};
  };
  return <button onClick={countHandler}>-</button>;
}
 
export default CounterButtonRemove