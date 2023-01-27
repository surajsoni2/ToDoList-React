import React, {useState,useEffect,useRef} from "react";
import Header from "./Header";
import Showitems from "./Showitems";

const getLocalData = () =>{
    const lists = localStorage.getItem("mytodoList")
    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}
const Todoitem = () => {

    const [inputdata, setInputdata] = useState("");
    const [items, setItems] = useState(getLocalData);
    const inputRef = useRef(null);
    const handleKeyDown = (e)=> {
        if(e.keyCode === 13){
            setInputdata(e.target.value)
            addItem();
        }
      }

    const addItem = ()=>{
        if(!inputdata){
            alert("plz fill some data");
        }else{
            const mynewdata = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, mynewdata])
            setInputdata("");
        }

    };
    const deleteItem = (id)=>{
        const updatedList = items.filter((currentItem) =>{
             return currentItem.id !== id;
            });
        setItems(updatedList);
    }

    const removeAll = async ()=>{
        if(items.length){
            if(window.confirm('Are you sure you want to remove all?'))
            {
                setItems([]);
            }   
        }
        else{
            alert("Todo List is empty")
        }
    }

    const editItem = (id)=>{
        const item_todo_edited = items.find((currentItem) =>{
            return currentItem.id === id;
        })
        deleteItem(item_todo_edited.id);
        setInputdata(item_todo_edited.name);
        inputRef.current.focus();
    }

    useEffect(() => {
        localStorage.setItem("mytodoList",JSON.stringify(items))
    }, [items]);
    
    return (
    <>
        <Header removeAll={removeAll} />
        <div className="main">
            <div className="addItems">
                <input 
                    type="text" 
                    placeholder="✍ Add Item" 
                    value={inputdata} 
                    onChange={(event) => setInputdata(event.target.value)} 
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <button type="submit" className="addBtn" onClick={addItem}>➕</button>
            </div>
            <div className="showItems">
                
                {items.map(
                    (item) =>   
                    <Showitems key={item.id} item={item} editItem={editItem} deleteItem={deleteItem} />
                )}

            </div>
        </div>
    </>
  );
}

export default Todoitem;