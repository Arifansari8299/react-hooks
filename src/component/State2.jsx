import React,{useState} from "react";
function State2(){
      const[count,setCount]=useState(0)
      function increase(){
            setCount(count+1)
      }
      return(
            <div> 
                  <p> {count}</p>
                  <button onClick={increase}> click</button>
             
            
            </div>
      )
}
export default State2;