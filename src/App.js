import React from "react";
import {Routes,Route} from "react-router-dom";

//import components
import Home from "./Components/Home";
import Details from "./Components/Details";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";
import Navbar from "./Components/Navbar";
import Errorpage from "./Components/Errorpage";
import Selectedcomp from "./Components/Selectedcomp";
import Morecards from "./Components/Morecards";

//css
import "./App.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={'/item'} element={<Details />} ></Route>
        <Route path={'/item/:id'} element={<Selectedcomp> 
          <Morecards/>
        </Selectedcomp>} ></Route>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
