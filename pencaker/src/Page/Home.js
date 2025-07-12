import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Orang from "./icon/orang.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [data2] = useState([
    {
      id: 7,
      namapelatihan: "Pelatihan Manajemen Proyek",
      namaperusahaan: "PT. PQR",
      jenisperusahaan: "Swasta",
      lokasipelatihan: "Semarang",
      deskripsipelatihan: "Pelatihan ini membantu peserta memahami prinsip-prinsip manajemen proyek yang efektif.",
      keuntunganpelatihan: "Meningkatkan kemampuan manajemen proyek, meningkatkan efisiensi, dan meningkatkan kualitas proyek.",
      syaratpelatihan: "Sarjana, minimal 2 tahun pengalaman kerja",
      tanggalmualai: "2024-08-05",
      tanggalselesai: "2024-08-19",
      tingkatkesulitan: "Sedang",
      kuotapeserta: 20,
      bidangpelatihan: "Manajemen",
      usia: "25-45 tahun"
    },
    {
      id: 8,
      namapelatihan: "Pelatihan Analisis Data",
      namaperusahaan: "PT. STU",
      jenisperusahaan: "BUMN",
      lokasipelatihan: "Bandung",
      deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara analisis data yang efektif.",
      keuntunganpelatihan: "Meningkatkan kemampuan analisis data, meningkatkan kualitas keputusan, dan meningkatkan efisiensi.",
      syaratpelatihan: "Sarjana, minimal 1 tahun pengalaman kerja",
      tanggalmualai: "2024-08-10",
      tanggalselesai: "2024-08-24",
      tingkatkesulitan: "Sedang",
      kuotapeserta: 25,
      bidangpelatihan: "Teknologi",
      usia: "25-50 tahun"
    },
    {
      id: 9,
      namapelatihan: "Pelatihan Komunikasi Efektif",
      namaperusahaan: "PT. VWX",
      jenisperusahaan: "Swasta",
      lokasipelatihan: "Surabaya",
      deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara komunikasi yang efektif.",
      keuntunganpelatihan: "Meningkatkan kemampuan komunikasi, meningkatkan kualitas hubungan, dan meningkatkan efisiensi.",
      syaratpelatihan: "Sarjana, minimal 1 tahun pengalaman kerja",
      tanggalmualai: "2024-08-15",
      tanggalselesai: "2024-08-29",
      tingkatkesulitan: "Sedang",
      kuotapeserta: 30,
      bidangpelatihan: "Komunikasi",
      usia: "25-55 tahun"
    },
  ])
  const [data] = useState([
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
      PendidikanTerakhir: "Bachelor's Degree",
    },
    {
      id: 2,
      NamaPerusahaan: "PT. ABC",
      JenisPerusahaan: "Perusahaan BUMN",
      Lokasi: "Bandung",
      NamaPekerjaan: "Marketing Manager",
      NilaiKecocokan: 0.9,
      JumlahLowongan: 3,
      JenisKontrak: "Part-Time",
      BidangPekerjaan: "Marketing",
      DeskripsiPekerjaan: "Develop and execute marketing strategies",
      GajiMinimum: 4000000,
      GajiMaximum: 8000000,
      TipeLokasi: "Kantor",
      Negara: "Indonesia",
      Provinsi: "Jawa Barat",
      Kabupaten_Kota: "Bandung",
      Kecamatan: "Lengkong",
      Kelurahan: "Kebon Jati",
      Alamatpenempatan: "Jl. Raya Bandung",
      Fasilitas: "Gym, cafeteria, and parking",
      Usia: 30,
      StatusPernikahan: "Married",
      JenisKelamin: "Female",
      JenisDisabilitas: "None",
      BeratBadan: 55,
      TinggiBadan: 165,
      PendidikanTerakhir: "Master's Degree",
    },
    {
      id: 10,
      NamaPerusahaan: "PT. YZ",
      JenisPerusahaan: "Perusahaan BUMN",
      Lokasi: "Medan",
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
      Provinsi: "Sumatera Utara",
      Kabupaten_Kota: "Medan",
      Kecamatan: "Medan Kota",
      Kelurahan: "Kebun Bunga",
      Alamatpenempatan: "Jl. Raya Medan",
      Fasilitas: "Gym, cafeteria, and parking",
      Usia: 29,
      StatusPernikahan: "Married",
      JenisKelamin: "Female",
      JenisDisabilitas: "None",
      BeratBadan: 57,
      TinggiBadan: 163,
      PendidikanTerakhir: "Bachelor's Degree",
    },
  ]);

  const [selectedJenisPerusahaan] = useState("");
  const [selectedLokasi] = useState("");
  const [lokasipelatihan] = useState("");
  const [bidangpelatihan] = useState("");

  const filteredData2 = data2.filter((item) => {
    return (
      (bidangpelatihan === '' || item.bidangpelatihan === bidangpelatihan) &&
      (lokasipelatihan === '' || item.lokasipelatihan === lokasipelatihan)
    );

  });



  const filteredData = data.filter((item) => {
    return (
      (selectedJenisPerusahaan === "" ||
        item.JenisPerusahaan === selectedJenisPerusahaan) &&
      (selectedLokasi === "" || item.Lokasi === selectedLokasi)
    );
  });
  return (
    <div className="App m3">
      <Card className="bg-info " height={450}>
        <Card.Img src={Orang} alt="Card image" sizes="10%" />
        <Card.ImgOverlay className="m-5">
          <Card.Title className="text-white">
            <h2>Selamat Datang di, </h2>
          </Card.Title>
          <Card.Text>
            <h1 className="text-warning">Si Juara</h1>
          </Card.Text>
          <Button
            className="mt-5 "
            variant="success"
            style={{ width: "10rem" }}
          >
            Pelajari
          </Button>
        </Card.ImgOverlay>
      </Card>
      <Container className="mt-5">
        <Row>
          <Col>
            <h4>Telusuri Pasar Kerja </h4>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <Link style={{ color: 'black', textDecoration: 'none' }} as={Link} to="/Pasker" >Lihat Semua </Link>

          </Col>
        </Row>
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
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-5">
        <Card style={{ backgroundColor: '#fff3cd', border: 'none', borderRadius: '10px', width: "60rem" }}>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <Card.Text>
                  <h4>Ikuti Test Kepribadian</h4>
                </Card.Text>
                <Card.Text>
                  Test Kepribadian berdasarkan Myers-Bringgs Type Indicator
                </Card.Text>
              </Col>
              <Col></Col>
              <Col>
                <Button variant="warning" style={{ width: "15rem" }}>
                  Ikuti
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <h4>Ikuti Pelatihan</h4>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <Breadcrumb>
              <Link style={{ color: 'black', textDecoration: 'none' }} as={Link} to="/Pelatihan" >Lihat Semua </Link>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          {filteredData2.map((item, index) => (
            <Col md={5} key={item.id} style={{ width: '18rem' }}>
              <Link to={`/rincian/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                <Card className='p-3'>
                  <Card.Body>
                    <Card.Title>{item.namapelatihan}</Card.Title>
                    <Card.Text>
                      {item.namaperusahaan} - {item.lokasipelatihan}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default Home;
