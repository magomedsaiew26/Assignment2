import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import Translate from "./Translate";
import Profile from "./Components/Profile";

function App(){
    return (
        <>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/translate" element={<Translate/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </>
    )
}
export default App;