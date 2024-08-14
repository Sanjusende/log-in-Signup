import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import Home from "./screen/Home";
import Login from "./screen/Login";





function App() {

  return (
<>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path="/login" element={<Login/>} />
      
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
