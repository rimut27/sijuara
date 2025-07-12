import Dasboard from "./Page/Home";
import Pasker from "./Page/PasarKerja";
import Pelatihan from "./Page/Pelatihan";
import Lamaran from "./Page/Lamaran";
import Event from "./Page/ubahdata/Formwawancara";
import DetailLamaran from "./Page/DetaiilLamaran";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu  from "./Page/Navigation";
import DetailLowongan from "./Page/DetailLowongan";
import Profile from "./Page/Profileperusahaan";
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
        <Route path="/Lamaran" exact element={<Lamaran />} />
        <Route path="/Event" exact element={<Event />} />
        <Route path="/Profileperusahaan" exact element={<Profile  />} />
        <Route path="/DetailLamaran/:id" exact element={<DetailLamaran />} />
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
