import Home from "./pages/home/home"
import ProfilePage from './pages/profilepage/ProfilePage'
import Login from "./pages/Login/Login";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function App(){
    return(
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
     
     </Route>
     <Route path='/profilepage' element={ <ProfilePage/>}>
    

     
     </Route>
     <Route path='/login' element={ <Login/>}/>
        </Routes></Router>
    )
}