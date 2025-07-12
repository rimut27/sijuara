import Dasboard from "./Page/Home";
import Pasker from "./Page/PasarKerja";
import Pelatihan from "./Page/Pelatihan";
import Bantuan from "./Page/Bantuan";
import Event from "./Page/Event";
import Informasi from "./Page/Informasi";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu  from "./Page/Navigation";
import DetailLowongan from "./Page/DetailLowongan";
import Profile from "./Page/Profilepencaker";
import Rincian from "./Page/rincian"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./Page/Login";
import  RegisForm from "./Page/regis"
import Notifpage from "./Page/Notifpage";
function App() {
  return (
    <Router>
      <div className="App m3">
        <Menu />      
        <br />
      </div>
        <Routes>
        <Route path="/" exact element={<Dasboard />} /> 
        <Route path="/Pasker" exact element={<Pasker />} />
        <Route path="/Pelatihan" exact element={<Pelatihan />} />
        <Route path="/Bantuan" exact element={<Bantuan />} />
        <Route path="/Event" exact element={<Event />} />
        <Route path="/ProfilePencaker" exact element={<Profile  />} />
        <Route path="/Informasi" exact element={<Informasi />} />
        <Route path="/detail/:id" element={<DetailLowongan />} />
        <Route path="/rincian/:id" element={<Rincian />} /> 
        <Route path="/Login" element={<LoginForm />} /> 
        <Route path="/Daftar" element={<RegisForm />} /> 
        <Route path="/Notification" element={<Notifpage />} /> 
        </Routes>
    </Router>
  );
}

export default App;
