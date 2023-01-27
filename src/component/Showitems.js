import React from 'react'

const Showitems = (props) => {
  return (
    <>
    <div className="item">
        <p>{props.item.name}</p>
        <i className="fa-regular fa-pen-to-square" onClick={() =>props.editItem(props.item.id)}></i>
        <button className="delete" onClick={()=>props.deleteItem(props.item.id)} >🗑</button>
    </div>
    </>
  )
}

export default Showitems