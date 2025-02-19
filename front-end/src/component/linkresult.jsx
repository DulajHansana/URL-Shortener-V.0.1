import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Linkresult = () => {
    const [linkesult, setLinkresult] = useState("Hello World");
    const [copied, setCopied] = useState(false);
  return (
    <div className='result'>
        <p>{linkesult}</p>
        
        <CopyToClipboard text={linkesult}
        onCopy={()=> setCopied(true)}>
        <button className={copied ? "copied": ""}>Copy to clipboard</button>
          </CopyToClipboard> 

        
    </div>
  )
}

export default Linkresult