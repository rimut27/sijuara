import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import EditFormjobModal from './ubahdata/Formjob';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PasarKerja() {
  let navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); // Kembali ke halaman sebelumnya
  }
  const [showFormjobModal, setShowProfileModal] = useState(false);
  const handlePFormjobModalClose = () => setShowProfileModal(false);
  const handleFormjobModalShow = () => setShowProfileModal(true);


  const [data, setData] = useState(
    [
      {
        id: 1,
        NamaPerusahaan: "PT. XYZ",
        JenisPerusahaan: "Perusahaan Swasta",
        Lokasi: "Jakarta",
        NamaPekerjaan: "Software Engineer",
        NilaiKecocokan: 0.8,
        JumlahLowongan: 5,
        JenisKontrak: "Full-Time",
        BidangPekerjaan: "IT",
        DeskripsiPekerjaan: "Design and develop software applications",
        GajiMinimum: 5000000,
        GajiMaximum: 10000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "DKI Jakarta",
        Kabupaten_Kota: "Jakarta Pusat",
        Kecamatan: "Taman Sari",
        Kelurahan: "Kebon Melati",
        Alamatpenempatan: "Jl. Raya Jakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 25,
        StatusPernikahan: "Single",
        JenisKelamin: "Male",
        JenisDisabilitas: "None",
        BeratBadan: 60,
        TinggiBadan: 170,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 2,
        NamaPerusahaan: "PT. XYZ",
        JenisPerusahaan: "Perusahaan BUMN",
        Lokasi: "Jakarta",
        NamaPekerjaan: "Marketing Manager",
        NilaiKecocokan: 0.9,
        JumlahLowongan: 3,
        JenisKontrak: "Part-Time",
        BidangPekerjaan: "Marketing",
        DeskripsiPekerjaan: "Develop and execute marketing strategies",
        GajiMinimum: 4000000,
        GajiMaximum: 8000000,
        TipeLokasi: "Kantor",
        Provinsi: "DKI Jakarta",
        Kabupaten_Kota: "Jakarta Pusat",
        Kecamatan: "Taman Sari",
        Kelurahan: "Kebon Melati",
        Alamatpenempatan: "Jl. Raya Jakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 30,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 55,
        TinggiBadan: 165,
        PendidikanTerakhir: "Master's Degree"
      },
      {
        id: 10,
        NamaPerusahaan: "PT. XYZ",
        JenisPerusahaan: "Perusahaan BUMN",
        Lokasi: "Jakarta",
        NamaPekerjaan: "Sales Representative",
        NilaiKecocokan: 0.7,
        JumlahLowongan: 4,
        JenisKontrak: "Full-Time",
        BidangPekerjaan: "Sales",
        DeskripsiPekerjaan: "Sell products and services to customers",
        GajiMinimum: 4000000,
        GajiMaximum: 8000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "DKI Jakarta",
        Kabupaten_Kota: "Jakarta Pusat",
        Kecamatan: "Taman Sari",
        Kelurahan: "Kebon Melati",
        Alamatpenempatan: "Jl. Raya Jakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 29,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 57,
        TinggiBadan: 163,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 4,
        NamaPerusahaan: "PT. XYZ",
        JenisPerusahaan: "Perusahaan BUMN",
        Lokasi: "Yogyakarta",
        NamaPekerjaan: "Human Resources Manager",
        NilaiKecocokan: 0.8,
        JumlahLowongan: 1,
        JenisKontrak: "Full-Time",
        BidangPekerjaan: "HR",
        DeskripsiPekerjaan: "Recruit, train, and manage employees",
        GajiMinimum: 4000000,
        GajiMaximum: 8000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "DKI Jakarta",
        Kabupaten_Kota: "Jakarta Pusat",
        Kecamatan: "Taman Sari",
        Kelurahan: "Kebon Melati",
        Alamatpenempatan: "Jl. Raya Jakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 32,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 52,
        TinggiBadan: 160,
        PendidikanTerakhir: "Master's Degree"
      },
    ]);

  const [selectedJenisPerusahaan, setSelectedJenisPerusahaan] = useState('');
  const [selectedLokasi, setSelectedLokasi] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');



  const filteredData = data.filter((item) => {
    return (
      (selectedJenisPerusahaan === '' || item.JenisPerusahaan === selectedJenisPerusahaan) &&
      (selectedLokasi === '' || item.Lokasi === selectedLokasi)
    );
  });

  const handleConfirm = () => {
    const result = window.confirm('Anda Yakin akan Menghapus Lowongan Kerja ?');
    if (result) {
      alert('Pekerjaan berhasil di Hapus');
    } else {
    alert('Pekerjaan gagal di Hapus');
    
    }
  };

  return (
    <div className="App  ml-3">
      <Container variant="outline-secondary">
        <Row>
          <h1 className='mb-5'>    <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Semua Pekerjaan</h1>

          <Col
            xs={6}
            data-bs-theme="light"
            className="bg-body-tertiary m-auto mb-4"
          >
            <Row>
              {filteredData.map((item) => (
                <Col md={5} key={item.id} style={{ width: '18rem' }}>
                  <Link to={`/detail/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                    <Card className='p-3 '>
                      <Card.Body>
                        <Card.Title>{item.NamaPekerjaan}</Card.Title>
                        <Card.Text>
                          {item.NamaPerusahaan} - {item.JumlahLowongan}
                        </Card.Text>
                        <Button variant="secondary" style={{ width: '5rem', height: "3rem" }} onClick={handleConfirm} >
                          Hapus
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
          <Button style={{ width: '18rem', height: "3rem" }} onClick={handleFormjobModalShow} variant='success'>
            Buat Lowongan
          </Button>
          <EditFormjobModal show={showFormjobModal} handleClose={handlePFormjobModalClose} />
          <Col md="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}


export default PasarKerja;