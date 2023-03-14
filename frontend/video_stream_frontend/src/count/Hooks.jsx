import React, { useState } from 'react';
import './index.css';
const Counter = () => {
      const [value,setvalue] = useState(0);
      const [dvalue,setdvalue] = useState(0);
      const increm = () =>{
           setvalue(value+1);
      }
      const decrem = () =>{
               setdvalue(dvalue+1);
      }
     return (
          <>
               <div className='main_div1'>
               <div className='center_div2'>
               <h1 className='count'> 👍:{value}    👎:{dvalue} </h1>
               <div className='controlbtns'>
               <button onClick={increm}><i class="fa-solid fa-thumbs-up"></i> </button>
               <button onClick={decrem}> <i class="fa-solid fa-thumbs-down"></i> </button>
               </div>
               </div>
               </div>   
          </>
     )
}
export default Counter;