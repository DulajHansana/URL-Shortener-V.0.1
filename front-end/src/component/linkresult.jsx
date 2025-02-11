import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = () => {
  const[shortenlink, setShortenlink] = useState("Hello World");
  const[copied, setCopied] = useState(false);
  return (
    <div className='result'>
      <p>{shortenlink}</p>
      <CopyToClipboard text={shortenlink}
  
    </div>
  )
}

export default LinkResult
