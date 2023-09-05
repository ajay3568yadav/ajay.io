import React from 'react'
import HeaderOption from './HeaderOption'
import "../style/Header.css"


function Header() {
  return (
    <div className="header">

        <HeaderOption title="AJAY YADAV"/>
        <HeaderOption title="PROJECTS"/>
        <HeaderOption title="SOCIALS"/>
        <HeaderOption title="CONTACTS"/>
      
    </div>
  )
}

export default Header
