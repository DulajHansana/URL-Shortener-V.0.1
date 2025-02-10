import React, { useState } from 'react'

const LinkResult = () => {
  const[shortenlink, setShortenlink] = useState("Hello World");
  return (
    <div className='result'>
      <p>{shortenlink}</p>
      <button>Copy to clipboard</button>
      
    </div>
  )
}

export default LinkResult
