import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Global.css"

// Making function for LoginForm and this containts a get API to retriew a data for a user, POST API to create a new user
function LoginForm(){
    const navigate=useNavigate()

    const [userData,setuserData] = useState([])
   const [name, setName] = useState("")
function handleChange(e){
    setName(e.target.value)
}

async function handleSubmit(e){
    e.preventDefault()
    const response=await fetch("https://purring-tender-alpaca.glitch.me/translations?username=" + name) 
    const pressJSON = await response.json()
    if (pressJSON.length>0){
        navigate("/Profile",{state:{name}})
    }
    else{
        const apiURL = 'https://purring-tender-alpaca.glitch.me'
const apiKey = 'abcdefghijklmnopqrstuvwxyz123456789012345678901234567890abcdertg'

const constResponse = await fetch(`${apiURL}/translations`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: name, 
            translations: [] 
        })
    }) 
    const jsonPost = await constResponse.json()
    navigate("/Profile",{state:{name}}) 
}
}
    return(
       <> 
       <h1 className ="Heading">Login</h1>
        <form className="LoginForm" onSubmit={handleSubmit}>
            <input required type="text" value = {name} onChange = {handleChange}/>
            <input type="submit" value = "Login"/>
        </form>
        </>
    )
}

export default LoginForm;