import React from 'react'

function home() {
  return (
    <div className='inputcontainer'>
      <h1>URL <span>Shortener</span></h1>
      <input type="text" placeholder='Past the link to shorten it' />
      <button>Shorten</button>
      
    </div>
  )
}

export default home
