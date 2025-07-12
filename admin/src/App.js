import Dasboard from "./Page/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu  from "./Page/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./Page/Login";
import  RegisForm from "./Page/regis"
import Notifpage from "./Page/Notifpage";
import Profile from "./Page/Profil";
import DataDetailPencaker from "./Page/detailpencaker";
import Verifikasi from "./Page/Verifikasi";
import DataDetailPerusahaan from "./Page/detailperushaan";
import Dokumen from "./Page/Dokunen";
import DetailLowongan from "./Page/DetailLowongan";
import Rincian from "./Page/rincian";
import Rekomdendasi from "./Page/Rekomendasi";
function App() {
  return (
    <Router>
      <div className="App m3">
        <Menu />      
        <br />
      </div>
        <Routes>
        <Route path="/" exact element={<Dasboard />} />
        <Route path="/Dokumen" element={<Dokumen />} />
        <Route path="/Login" element={<LoginForm />} /> 
        <Route path="/Daftar" element={<RegisForm />} />
        <Route path="/Profil" element={<Profile />}/>  
        <Route path ="/Rekomendasi" element={<Rekomdendasi />}/> 
        <Route path ="/Verifikasi" element={<Verifikasi />}/> 
        <Route path="/pencaker/:id" element={<DataDetailPencaker />} />
        <Route path="/Perusuahan/:id" element={<DataDetailPerusahaan />} />
        <Route path="/detaillowongankerja/:id" element={<DetailLowongan />} />
        <Route path="/rincian/:id" element={<Rincian />} />
        <Route path="/Notification" element={<Notifpage />} /> 
        </Routes>
    </Router>
  );
}

export default App;
