import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = () => {
  const[shortenlink, setShortenlink] = useState("Hello World");
  const[copied, setCopied] = useState(false);
  return (
    <div className='result'>
      <p>{shortenlink}</p>
      <CopyToClipboard text={shortenlink}
        onCopy={() => setCopied(true)}>

      <button className={copied ? "copied": ""}>Copy to clipboard</button>
        </CopyToClipboard>
        
      
    </div>
  )
}

export default LinkResult
