import React from 'react'

const Header = (props) => {
  return (
    <nav>
        <div className="logo">
        <i className="fa-solid fa-clipboard-list"></i>
        ToDo List
        </div>
        <button onClick={props.removeAll}><i className="fa-solid fa-trash"></i></button>
    </nav>
  )
}

export default Header