import React,{useState} from 'react'
function State1(){
      // variable yaha declare karenge
      const[count,setCount]=useState(0) // count variable ki initial value 0 assign ho gya
      // function yaha banaegenge 
      function Add(){ 
            setCount(count+1)
      }
      // method 2 using function expression
    const Reset=()=>{
      setCount(0)
    }
      return(

            <div>
                  <h1> {count }</h1>
                  <button onClick={Add}>Add</button> 
                 <button onClick={()=>setCount(count-1)}>Sub</button>
                 <button onClick={Reset}>Reset</button>
                
                 

            </div>
      )
}
export default State1;