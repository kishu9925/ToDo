import React, { useState } from "react";
import todo from '../images/todo.jpg'

const Todo = () => {

        const [inputData, setInputData] = useState();
        const[items,setItems] = useState([]);


        const addItem = () => {
            if(!inputData){

            }else{
            setItems([...items, inputData]);
            setInputData('');
            };
}

const deleteItem = (id) => {
    const updatedItems = items.filter((elem,ind) => {
        return ind != id;
    })
    setItems(updatedItems)
}

const removeAll = () => {
    setItems([]);
}
    return (
        <>
            <div className="main-div center">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo_logo"/>
                        <figcaption> Add Your List Here! </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type='text' placeholder="Add items..." id=""
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className="fa-solid fa-plus add-btn" title="Add items"
                            onClick={addItem}
                        ></i>
                    </div>
                    <div className="showItems">
                    {
                        items.map((elem,ind) => {
                            return(
                                <div className="eachItems" key={ind}>
                                    <h3>{elem}</h3>
                                    <i className="fa-regular fa-trash-alt" title="Delete Items" onClick={() => deleteItem(ind)}></i>
                                </div>
                            )
                        })
                    }
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All'onClick={removeAll} > <span>CheckList</span></button>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Todo;