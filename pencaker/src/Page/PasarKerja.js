import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PasarKerja() {
  let navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); // Kembali ke halaman sebelumnya
  }

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
        PendidikanTerakhir: "Master's Degree"
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
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 4,
        NamaPerusahaan: "PT. GHI",
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
        Provinsi: "DI Yogyakarta",
        Kabupaten_Kota: "Yogyakarta",
        Kecamatan: "Gondokusuman",
        Kelurahan: "Kebon Agung",
        Alamatpenempatan: "Jl. Raya Yogyakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 32,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 52,
        TinggiBadan: 160,
        PendidikanTerakhir: "Master's Degree"
      },
      {
        id: 5,
        NamaPerusahaan: "PT. JKL",
        JenisPerusahaan: "Perusahaan Swasta",
        Lokasi: "Medan",
        NamaPekerjaan: "Sales Representative",
        NilaiKecocokan: 0.9,
        JumlahLowongan: 4,
        JenisKontrak: "Part-Time",
        BidangPekerjaan: "Sales",
        DeskripsiPekerjaan: "Sell products and services to customers",
        GajiMinimum: 3000000,
        GajiMaximum: 6000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "Sumatera Utara",
        Kabupaten_Kota: "Medan",
        Kecamatan: "Medan Kota",
        Kelurahan: "Kebun Bunga",
        Alamatpenempatan: "Jl. Raya Medan",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 29,
        StatusPernikahan: "Single",
        JenisKelamin: "Male",
        JenisDisabilitas: "None",
        BeratBadan: 62,
        TinggiBadan: 172,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 6,
        NamaPerusahaan: "PT. MNO",
        JenisPerusahaan: "Perusahaan BUMN",
        Lokasi: "Bogor",
        NamaPekerjaan: "IT Support",
        NilaiKecocokan: 0.8,
        JumlahLowongan: 3,
        JenisKontrak: "Full-Time",
        BidangPekerjaan: "IT",
        DeskripsiPekerjaan: "Provide technical support to employees",
        GajiMinimum: 4000000,
        GajiMaximum: 8000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "Jawa Barat",
        Kabupaten_Kota: "Bogor",
        Kecamatan: "Tegallega",
        Kelurahan: "Kebun Jati",
        Alamatpenempatan: "Jl. Raya Bogor",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 31,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 56,
        TinggiBadan: 164,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 7,
        NamaPerusahaan: "PT. PQR",
        JenisPerusahaan: "Perusahaan Swasta",
        Lokasi: "Bandung",
        NamaPekerjaan: "Marketing Assistant",
        NilaiKecocokan: 0.7,
        JumlahLowongan: 2,
        JenisKontrak: "Part-Time",
        BidangPekerjaan: "Marketing",
        DeskripsiPekerjaan: "Assist in developing and executing marketing strategies",
        GajiMinimum: 3000000,
        GajiMaximum: 6000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "Jawa Barat",
        Kabupaten_Kota: "Bandung",
        Kecamatan: "Lengkong",
        Kelurahan: "Kebon Jati",
        Alamatpenempatan: "Jl. Raya Bandung",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 27,
        StatusPernikahan: "Single",
        JenisKelamin: "Male",
        JenisDisabilitas: "None",
        BeratBadan: 59,
        TinggiBadan: 169,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 8,
        NamaPerusahaan: "PT. STU",
        JenisPerusahaan: "Perusahaan BUMN",
        Lokasi: "Surabaya",
        NamaPekerjaan: "Accountant",
        NilaiKecocokan: 0.8,
        JumlahLowongan: 2,
        JenisKontrak: "Full-Time",
        BidangPekerjaan: "Finance",
        DeskripsiPekerjaan: "Prepare and review financial reports",
        GajiMinimum: 4000000,
        GajiMaximum: 8000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "Jawa Timur",
        Kabupaten_Kota: "Surabaya",
        Kecamatan: "Tegalsari",
        Kelurahan: "Kebon Agung",
        Alamatpenempatan: "Jl. Raya Surabaya",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 30,
        StatusPernikahan: "Married",
        JenisKelamin: "Female",
        JenisDisabilitas: "None",
        BeratBadan: 54,
        TinggiBadan: 161,
        PendidikanTerakhir: "Bachelor's Degree"
      },
      {
        id: 9,
        NamaPerusahaan: "PT. VWX",
        JenisPerusahaan: "Perusahaan Swasta",
        Lokasi: "Yogyakarta",
        NamaPekerjaan: "Human Resources Assistant",
        NilaiKecocokan: 0.9,
        JumlahLowongan: 1,
        JenisKontrak: "Part-Time",
        BidangPekerjaan: "HR",
        DeskripsiPekerjaan: "Assist in recruiting, training, and managing employees",
        GajiMinimum: 3000000,
        GajiMaximum: 6000000,
        TipeLokasi: "Kantor",
        Negara: "Indonesia",
        Provinsi: "DI Yogyakarta",
        Kabupaten_Kota: "Yogyakarta",
        Kecamatan: "Gondokusuman",
        Kelurahan: "Kebon Agung",
        Alamatpenempatan: "Jl. Raya Yogyakarta",
        Fasilitas: "Gym, cafeteria, and parking",
        Usia: 28,
        StatusPernikahan: "Single",
        JenisKelamin: "Male",
        JenisDisabilitas: "None",
        BeratBadan: 61,
        TinggiBadan: 171,
        PendidikanTerakhir: "Bachelor's Degree"
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
        PendidikanTerakhir: "Bachelor's Degree"
      }
    ]);

  const [selectedJenisPerusahaan, setSelectedJenisPerusahaan] = useState('');
  const [selectedLokasi, setSelectedLokasi] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleJenisPerusahaanChange = (e) => {
    setSelectedJenisPerusahaan(e.target.value);
  };

  const handleLokasiChange = (e) => {
    setSelectedLokasi(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (selectedJenisPerusahaan === '' || item.JenisPerusahaan === selectedJenisPerusahaan) &&
      (selectedLokasi === '' || item.Lokasi === selectedLokasi)
    );
  });

  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.NamaPerusahaan < b.NamaPerusahaan) return sortOrder === 'asc' ? -1 : 1;
      if (a.NamaPerusahaan > b.NamaPerusahaan) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const [originalData] = useState(data);

  const handleReset = () => {
    setData(originalData);
    setSortOrder('asc');
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    const filteredData = originalData.filter(item =>
      item.NamaPerusahaan.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.NamaPekerjaan.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="App mt-3 ml-3">
      <Container variant="outline-secondary">
        <Row>
          <h1>   <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Semua Pekerjaan</h1>
          <Col
            sm={5}
            bg="light"
            data-bs-theme="light"
            className="bg-body-tertiary"
          >
            <Row className="mb-4">
              <Form className="d-flex m-auto mt-3 mb-3">
                <Form.Control
                  type="search"
                  placeholder="Cari Lowongan Kerja disini"
                  className="me-2"
                  aria-label="Cari Lowongan Kerja disini"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                />
              </Form>
              <Form.Text className="text-muted ml-5 mt-4">
                Lowongan Kerja
              </Form.Text>
              <Row className="mt-4 mb-3 m-auto">
                <Col>
                  <Button
                    className="m-auto"
                    style={{ width: "10rem", height: "50px" }}
                    variant="outline-secondary"
                  >
                    Siap Kerja
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="m-auto"
                    style={{ width: "10rem", height: "50px" }}
                    variant="outline-secondary"
                  >
                    Sijuara
                  </Button>
                </Col>
              </Row>
              <Row className='mb=4'>
                <Form>
                  <Form.Group controlId="jenisPerusahaan">
                    <Form.Label>Jenis Perusahaan</Form.Label>
                    <Form.Control as="select" value={selectedJenisPerusahaan} onChange={handleJenisPerusahaanChange}>
                      <option value="">Semua Jenis Perusahaan</option>
                      <option value="Perusahaan Swasta">Perusahaan Swasta</option>
                      <option value="Perusahaan BUMN">Perusahaan BUMN</option>
                    </Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="lokasi">
                    <Form.Label>Lokasi</Form.Label>
                    <Form.Control as="select" value={selectedLokasi} onChange={handleLokasiChange}>
                      <option value="">Semua Lokasi</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Medan">Medan</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Bogor">Bogor</option>
                      <option value="Surabaya">Surabaya</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Row>
              <br />
              <Row className="mt-4 m-auto">
                <Col>
                  <Button
                    className="m-auto"
                    style={{ width: "7rem", height: "50px" }}
                    variant="outline-secondary"
                  >
                    Terima
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="m-auto"
                    style={{ width: "7rem", height: "50px" }}
                    variant="outline-secondary"
                  >
                    Terbaru
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="m-auto"
                    style={{ width: "10rem", height: "50px" }}
                    variant="outline-secondary"
                    onClick={handleSort}
                  >
                    Urutan A-Z
                  </Button>
                </Col>
              </Row>
              <Row className="m-auto  mb-5 mt-4">
                <Button
                  className="m-auto  mt-4"
                  style={{ width: "25rem", height: "50px" }}
                  variant="outline-secondary"
                  onClick={handleReset}
                >
                  Reset Filter
                </Button>
              </Row>
            </Row>
          </Col>
          <Col md="auto"></Col>
          <Col
            xs={6}
            data-bs-theme="light"
            className="bg-body-tertiary m-auto mb-4"
          >
          <Row>
              {filteredData.map((item)=> (
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
          </Col>
          <Col md="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}


export default PasarKerja;