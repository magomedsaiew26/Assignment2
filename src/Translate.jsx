import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { convertText } from "./textconverter";
import { useContext } from "react";
import { MyContext } from "./App";
// This my translate components and here are making Patch API request to update data on the server

function Translate() {
  const navigate=useNavigate()
  const location = useLocation()
  const [signLanguage, setsignLanguage]= useState("")
  const value = useContext(MyContext)
  const [outputText, setoutputText]= useState(value)
  const [translations, setTranslations] = useState(location.state.user.translations)
  function handleChange (e){ 
    setsignLanguage (e.target.value)
  }
  async function handleFunction (e) {
    e.preventDefault()
    setoutputText(convertText(signLanguage))
    const apiURL = 'https://purring-tender-alpaca.glitch.me'
const apiKey = 'abcdefghijklmnopqrstuvwxyz123456789012345678901234567890abcdertg'
const userId = location.state.user.id  // Update user with id 1
setTranslations ((prev)=>{
  return [...prev,signLanguage]
})
await fetch(`${apiURL}/translations/${userId}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new translations to add to user with id 1
            translations: [...translations, signLanguage] 
        })
    })
  }
  function handleClick(){
  navigate(-1)
  }
  return (
    <>
      <div className="TranslateButton">
        <button onClick={handleClick} className="Logout">Go to Profile</button>
      </div>
      <h1 className="Heading">Make some translations</h1>
      <form className="LoginForm" onSubmit={handleFunction}>
        <input required type="text" value={signLanguage} onChange={handleChange}/>
        <input type="submit" value = "Translate"/>
      </form>
      <div>
      { 
      outputText.map((value, index) => {
        return <img key={index} width="100px" src={value} alt="    " />;
      })

      }
      </div>
    </>
  );
}

export default Translate;
