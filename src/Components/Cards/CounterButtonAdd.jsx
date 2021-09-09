import React, { useState } from 'react';


 export const CounterButtonAdd = (props) => {
  const [count, setState] = useState(1);
  const [date, setDate] = useState(Date());
  const countHandler = () => {
    if(count < props.stock){
    sessionStorage.setItem(`cuenta_${props.id}`,count)
    setState(count + 1);
    setDate(Date());
    console.log(count, date)};
  };
  return <button onClick={countHandler}>+</button>;
}
 
export default CounterButtonAdd

