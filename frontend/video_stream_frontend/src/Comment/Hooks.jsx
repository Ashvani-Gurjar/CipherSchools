import React, { useState } from 'react';
import './index.css';
import ToDoLists from './Tolist';

const Commit = () => {

   const [inputList,setInputList] = useState("");
   const [Items,setItems] = useState([]);
    const itemEvent = (event)=>{
       setInputList(event.target.value);     
    }
   const listOfItems = () =>{
         setItems((oldItems)=>{
              if(inputList===""){
                return [...oldItems];
              }
              else{
                   return [...oldItems,inputList];
              }
         })
         setInputList("");
   };

   const deleteItems = (id)=>{
     setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
               return index!==id ;

          })
     })
}
    
     return (
          <>
               <div className='main_div'>
                <div className='center_div'>
                    <h1 className='h1'> Comment Section</h1>
                    <input id='ids' type="text" 
                     placeholder='Add Ours Thoughts'
                     value={inputList} 
                     onChange={itemEvent}/>
                    <button className='add' onClick={listOfItems}> + </button>
                    <ol>
                         {Items.map((itemval, index)=>{
                           return <ToDoLists id={index}
                           key={index}
                           text={itemval}
                           onSelect = {deleteItems}
                            />          
                         })} 
                    </ol>
                </div>
               </div>
          </>
     )
}
export default Commit;