import React, {useState} from "react";

const HookUseState = () => {
  const [counter, setcounter] = useState(7)
  //let counter=7;
  const inc = () => {
    setcounter(counter+1);
  }
  const dec = () => {
    setcounter(counter-1);
  }
  return(
    <div>
      <button onClick={dec}>dec value</button>
      {counter}
      <button onClick={inc}>inc value</button>
    </div>
  )

}

export default HookUseState;
