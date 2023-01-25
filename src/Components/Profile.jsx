import { useLocation, useNavigate } from "react-router-dom";
import ProfileTranslationHistory from "../Profile/ProfileTranslationHistory";
import ProfileActions from "../Profile/ProfileActions";
import ProfileHeader from "../Profile/ProfileHeader";
import { useEffect } from "react";
import { useState } from "react";
import "../Global.css"

function Profile(){
    const navigate = useNavigate()
    const location=useLocation()
    const [user, setUser] = useState({name:"", translations:[]})
    //const {user} = useUser()
    async function getUser (){
        const response=await fetch("https://purring-tender-alpaca.glitch.me/translations?username=" + location.state.name) 
        const pressJSON = await response.json() 
        setUser(pressJSON[0])
    }
function handleClick(){
    navigate("/Translate",{state:{user}}) 
}
    useEffect (()=>{
        getUser()
    },[])
function handleLogOut(){
    navigate("/")
}
    return(
        <>
        <div className="TranslateButton">
        <button className ="TranslateLink"onClick={handleClick}>Go to Translate</button> 
        <button className="Logout" onClick={handleLogOut}>Log out</button>
        </div>
        <h1 className ="Heading">{location.state.name}</h1>
        <div className="Translations">
        <h2>Last 10 translations</h2>
        {
            user.translations.reverse().slice(0,10).map((translation, index)=>{
                return  <p className="LastTranslations" key={index}>{translation}</p>
            })
        }
        </div>
        </>
        
    )
}

export default Profile;