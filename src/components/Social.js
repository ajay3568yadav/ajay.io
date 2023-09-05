import React from 'react'
import '../style/Social.css'

export default function Social({title,id,Icon,link}) {
  return (
   <a href={link}>
    <div className="social">
      <div className="social-title">
        <h1>{title}</h1>
        <p>{id}</p>
      </div>
      <div className="social-icon">
        <img src={Icon} alt="image"></img>
      </div>
    </div>
    </a>
  )
}
