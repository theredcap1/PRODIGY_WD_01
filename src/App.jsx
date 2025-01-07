import './App.css'
import NavBar from "./components/NavBar.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  )
}

export default App
