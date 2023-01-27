import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import Translate from "./Translate";
import Profile from "./Components/Profile";
import React from 'react';
export const MyContext = React.createContext()

// In this components I have defined three routes (Loginform, Translate and Profile)
function App(){
    return (
        <>
        <MyContext.Provider value= {[]}>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/translate" element={<Translate/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </MyContext.Provider>
        </>
    )
}
export default App;

