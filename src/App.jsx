import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@material-ui/core';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems=>{
      return  oldItems.filter((arrElem,index)=>{
       return index !== id ;
      })
    }))
  }




  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />

          <input
            type="text"
            placeholder='Add Items'
            onChange={itemEvent}
            value={inputList} />
          <Button 
          style = {{ backgroundColor:'green', 
                      color:'white',
                      borderRadius:'50px',
                      marginLeft:'5px',
                      height:'10px'}} className = "new_btn" onClick={listOfItems}>
            <AddIcon/>
          </Button>

          <ol>
            {items.map((itemval, index) => {
              return <ToDoLists 
                key={index}
                id={index} 
                text={itemval} 
                onSelect = { deleteItems }
                />
                
            })}
          </ol>
        </div>
      </div>
    </>
  )

};

export default App;