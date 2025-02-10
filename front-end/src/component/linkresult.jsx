import React, { useState } from 'react'

const LinkResult = () => {
  const[shortenlink, setShortenlink] = useState("Hello World");
  return (
    <div>
      <p>{shortenlink}</p>
     
    </div>
  )
}

export default LinkResult
