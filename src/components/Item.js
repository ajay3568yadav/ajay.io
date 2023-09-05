import React from 'react'
import '../style/Item.css'
import arrow from '../Images/arrow-circle.png'

function Item({title,date}) {
  return (
    <div className="item-list">
      <div className="date-and-title">
        <div className="date-desc">
        <p>{date}</p>
        </div>
        <div className="title-desc">
            <h1>{title}</h1>
        </div>
      </div>
      <img src={arrow}></img>
    </div>
  )
}

export default Item
