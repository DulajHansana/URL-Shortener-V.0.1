import React from 'react'

function navbar() {
  return (
    <>
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
      
    </>
  )
}

export default navbar
