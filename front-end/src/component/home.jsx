import {useState} from "react";

const Home = ({setInputValue}) => {
  const[value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }


  return (
    <div className='inputcontainer'>
      <h1>URL <span>Shortener</span></h1>
      <input type="text"
       placeholder='Past the link to shorten it' 
       value={value}
        onChange={(e) => setValue(e.target.value)}
       />
      <button onClick={handleClick}>Shorten</button>
      
      
    </div>
  )
}

export default Home
