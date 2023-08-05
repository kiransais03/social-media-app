import React from "react";
import {Routes,Route} from "react-router-dom";

//import components
import Home from "./Components/Home";
import Details from "./Components/Details";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";
import Navbar from "./Components/Navbar";
import Errorpage from "./Components/Errorpage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item" element={<Details />}>
              <Route path="id" element={<Account />} />
        </Route>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
