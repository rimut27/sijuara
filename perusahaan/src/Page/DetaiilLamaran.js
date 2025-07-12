import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Wawancaraform from './ubahdata/Formwawancara';

const DataDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showWawancaraformModal, setShowWawancaraformModal] = useState(false);
  const handleWawancaraformModalClose = () => setShowWawancaraformModal(false);
  const handleWawancaraformModalShow = () => setShowWawancaraformModal(true);

  const data = [
    {
      "id": 1,
      "nama": "Ahmad",
      "tempatlahir": "Jakarta",
      "tanggallahir": "2000-01-01",
      "agama": "Islam",
      "statusperkawinan": "Belum Menikah",
      "telepon": "08123456789",
      "email": "ahmad@gmail.com",
      "tingkatpendidikan": "S1",
      "namasekolah": "Universitas Indonesia",
      "tahunlulus": "2022",
      "minat": "Programming",
      "kompetensi": "Java",
      "namapelatihan": "Training Java",
      "tempatpelatihan": "Jakarta",
      "tanggallatihan": "2022-06-01",
      "durapelatihan": "1 Bulan",
      "namaperusahaan": "PT. XYZ",
      "Jabatan": "Developer",
      "tahunmasuk": "2020",
      "tahunkeluar": "2022",
      "Paspor": "123456789"
    },
    {
      "id": 2,
      "nama": "Nina",
      "tempatlahir": "Bandung",
      "tanggallahir": "2002-02-02",
      "agama": "Kristen",
      "statusperkawinan": "Menikah",
      "telepon": "08565432190",
      "email": "nina@gmail.com",
      "tingkatpendidikan": "S2",
      "namasekolah": "Institut Teknologi Bandung",
      "tahunlulus": "2018",
      "minat": "Data Science",
      "kompetensi": "Python",
      "namapelatihan": "Training Data Science",
      "tempatpelatihan": "Bandung",
      "tanggallatihan": "2018-03-01",
      "durapelatihan": "2 Bulan",
      "namaperusahaan": "PT. ABC",
      "Jabatan": "Data Scientist",
      "tahunmasuk": "2015",
      "tahunkeluar": "2018",
      "Paspor": "987654321"
    },
    {
      "id": 3,
      "nama": "Budi",
      "tempatlahir": "Surabaya",
      "tanggallahir": "1998-03-03",
      "agama": "Buddha",
      "statusperkawinan": "Belum Menikah",
      "telepon": "08234567891",
      "email": "budi@gmail.com",
      "tingkatpendidikan": "S1",
      "namasekolah": "Universitas Gadjah Mada",
      "tahunlulus": "2020",
      "minat": "Engineering",
      "kompetensi": "Mechanical",
      "namapelatihan": "Training Mechanical",
      "tempatpelatihan": "Yogyakarta",
      "tanggallatihan": "2020-04-01",
      "durapelatihan": "3 Bulan",
      "namaperusahaan": "PT. DEF",
      "Jabatan": "Engineer",
      "tahunmasuk": "2017",
      "tahunkeluar": "2020",
      "Paspor": "456789123"
    },
    {
      "id": 4,
      "nama": "Dewi",
      "tempatlahir": "Bogor",
      "tanggallahir": "2004-04-04",
      "agama": "Katolik",
      "statusperkawinan": "Menikah",
      "telepon": "08345678912",
      "email": "dewi@gmail.com",
      "tingkatpendidikan": "S2",
      "namasekolah": "Universitas Padjadjaran",
      "tahunlulus": "2021",
      "minat": "Marketing",
      "kompetensi": "Digital",
      "namapelatihan": "Training Digital Marketing",
      "tempatpelatihan": "Bogor",
      "tanggallatihan": "2021-05-01",
      "durapelatihan": "1 Bulan",
      "namaperusahaan": "PT. GHI",
      "Jabatan": "Marketing Manager",
      "tahunmasuk": "2019",
      "tahunkeluar": "2021",
      "Paspor": "789456123"
    },
    {
      "id": 5,
      "nama": "Eka",
      "tempatlahir": "Malang",
      "tanggallahir": "2001-05-05",
      "agama": "Hindu",
      "statusperkawinan": "Belum Menikah",
      "telepon": "08456789123",
      "email": "eka@gmail.com",
      "tingkatpendidikan": "S1",
      "namasekolah": "Universitas Brawijaya",
      "tahunlulus": "2023",
      "minat": "IT",
      "kompetensi": "Networking",
      "namapelatihan": "Training Networking",
      "tempatpelatihan": "Malang",
      "tanggallatihan": "2023-06-01",
      "durapelatihan": "2 Bulan",
      "namaperusahaan": "PT. JKL",
      "Jabatan": "Network Engineer",
      "tahunmasuk": "2021",
      "tahunkeluar": "2023",
      "Paspor": "321456789"
    },
    {
      "id": 6,
      "nama": "Fina",
      "tempatlahir": "Tangerang",
      "tanggallahir": "1999-06-06",
      "agama": "Islam",
      "statusperkawinan": "Menikah",
      "telepon": "08567891234",
      "email": "fina@gmail.com",
      "tingkatpendidikan": "S2",
      "namasekolah": "Universitas Indonesia",
      "tahunlulus": "2016",
      "minat": "Finance",
      "kompetensi": "Accounting",
      "namapelatihan": "Training Accounting",
      "tempatpelatihan": "Jakarta",
      "tanggallatihan": "2016-07-01",
      "durapelatihan": "1 Bulan",
      "namaperusahaan": "PT. MNO",
      "Jabatan": "Accountant",
      "tahunmasuk": "2014",
      "tahunkeluar": "2016",
      "Paspor": "654321987"
    },
    {
      "id": 7,
      "nama": "Gita",
      "tempatlahir": "Semarang",
      "tanggallahir": "2003-07-07",
      "agama": "Kristen",
      "statusperkawinan": "Belum Menikah",
      "telepon": "08678912345",
      "email": "gita@gmail.com",
      "tingkatpendidikan": "S1",
      "namasekolah": "Universitas Diponegoro",
      "tahunlulus": "2024",
      "minat": "Business",
      "kompetensi": "Management",
      "namapelatihan": "Training Management",
      "tempatpelatihan": "Semarang",
      "tanggallatihan": "2024-08-01",
      "durapelatihan": "3 Bulan",
      "namaperusahaan": "PT. PQR",
      "Jabatan": "Business Development",
      "tahunmasuk": "2022",
      "tahunkeluar": "2024",
      "Paspor": "987654321"
    },
    {
      "id": 8,
      "nama": "Hendri",
      "tempatlahir": "Palembang",
      "tanggallahir": "1996-08-08",
      "agama": "Islam",
      "statusperkawinan": "Menikah",
      "telepon": "08234567891",
      "email": "hendri@gmail.com",
      "tingkatpendidikan": "S2",
      "namasekolah": "Institut Teknologi Bandung",
      "tahunlulus": "2012",
      "minat": "IT",
      "kompetensi": "Software",
      "namapelatihan": "Training Software",
      "tempatpelatihan": "Bandung",
      "tanggallatihan": "2012-09-01",
      "durapelatihan": "2 Bulan",
      "namaperusahaan": "PT. STU",
      "Jabatan": "Software Engineer",
      "tahunmasuk": "2009",
      "tahunkeluar": "2012",
      "Paspor": "123456789"
    },
    {
      "id": 9,
      "nama": "Indah",
      "tempatlahir": "Yogyakarta",
      "tanggallahir": "2005-09-09",
      "agama": "Buddha",
      "statusperkawinan": "Belum Menikah",
      "telepon": "08345678912",
      "email": "indah@gmail.com",
      "tingkatpendidikan": "S1",
      "namasekolah": "Universitas Gadjah Mada",
      "tahunlulus": "2025",
      "minat": "Engineering",
      "kompetensi": "Civil",
      "namapelatihan": "Training Civil Engineering",
      "tempatpelatihan": "Yogyakarta",
      "tanggallatihan": "2025-10-01",
      "durapelatihan": "1 Bulan",
      "namaperusahaan": "PT. VWX",
      "Jabatan": "Civil Engineer",
      "tahunmasuk": "2023",
      "tahunkeluar": "2025",
      "Paspor": "456789123"
    },
    {
      "id": 10,
      "nama": "Joko",
      "tempatlahir": "Surabaya",
      "tanggallahir": "2007-10-10",
      "agama": "Katolik",
      "statusperkawinan": "Menikah",
      "telepon": "08567891234",
      "email": "joko@gmail.com",
      "tingkatpendidikan": "S2",
      "namasekolah": "Universitas Padjadjaran",
      "tahunlulus": "2020",
      "minat": "Marketing",
      "kompetensi": "Digital",
      "namapelatihan": "Training Digital Marketing",
      "tempatpelatihan": "Bogor",
      "tanggallatihan": "2020-11-01",
      "durapelatihan": "2 Bulan",
      "namaperusahaan": "PT. YZ",
      "Jabatan": "Marketing Manager",
      "tahunmasuk": "2018",
      "tahunkeluar": "2020",
      "Paspor": "789456123"
    }
  ];

  const item = data.find(item => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Data not found</div>;
  }

  function handleGoBack() {
    navigate(-1); // Kembali ke halaman sebelumnya
  }

  const handleConfirm = () => {
    const result = window.confirm('Anda Yakin Memangil Pelamar ini Untuk Jadi Karyawan ? \nNote!! Panggilan Kerja dalam 1 Minggu Akan Hangus');
    if (result) {
      alert('Notifikasi Pemanggilan Sudah Dikirim');
    } else {
      alert('Notifikasi Pemanggilan Batal Dikirim');

    }
  };


  return (
    <div className="App mt-3 ml-3">
      <Container>
        <Row>
          <h1>
            <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Detail Lamaran
          </h1>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={9} className="m-auto mb-4">
            <Table striped bordered >
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>{item.nama}</td>
                </tr>
                <tr>
                  <td>Tingkat Pendidikan</td>
                  <td>{item.tingkatpendidikan}</td>
                </tr>
                <tr>
                  <td>Kompetensi</td>
                  <td>{item.kompetensi}</td>
                </tr>
                <tr>
                  <td>Tempat Lahir</td>
                  <td>{item.tempatlahir}</td>
                </tr>
                <tr>
                  <td>Tanggal Lahir</td>
                  <td>{item.tanggallahir}</td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td>{item.agama}</td>
                </tr>
                <tr>
                  <td>Status Perkawinan</td>
                  <td>{item.statusperkawinan}</td>
                </tr>
                <tr>
                  <td>Telepon</td>
                  <td>{item.telepon}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{item.email}</td>
                </tr>
                <tr>
                  <td>Nama Sekolah</td>
                  <td>{item.namasekolah}</td>
                </tr>
                <tr>
                  <td>Tahun Lulus</td>
                  <td>{item.tahunlulus}</td>
                </tr>
                <tr>
                  <td>Minat</td>
                  <td>{item.minat}</td>
                </tr>
                <tr>
                  <td>Nama Pelatihan</td>
                  <td>{item.namapelatihan}</td>
                </tr>
                <tr>
                  <td>Tempat Pelatihan</td>
                  <td>{item.tempatpelatihan}</td>
                </tr>
                <tr>
                  <td>Tanggal Pelatihan</td>
                  <td>{item.tanggallatihan}</td>
                </tr>
                <tr>
                  <td>Durasi Pelatihan</td>
                  <td>{item.durapelatihan}</td>
                </tr>
                <tr>
                  <td>Nama Perusahaan</td>
                  <td>{item.namaperusahaan}</td>
                </tr>
                <tr>
                  <td>Jabatan</td>
                  <td>{item.Jabatan}</td>
                </tr>
                <tr>
                  <td>Tahun Masuk</td>
                  <td>{item.tahunmasuk}</td>
                </tr>
                <tr>
                  <td>Tahun Keluar</td>
                  <td>{item.tahunkeluar}</td>
                </tr>
                <tr>
                  <td>Paspor</td>
                  <td>{item.Paspor}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
            <Col>
  
            <Button style={{ width: '18rem', height: "3rem" }} onClick={handleWawancaraformModalShow} variant='success'>
              Wawancara
            </Button>
          <Wawancaraform show={showWawancaraformModal} handleClose={handleWawancaraformModalClose} />
            <br />
            <br />
            <Button variant="success" onClick={handleConfirm} style={{ width: '18rem', height: "3rem" }}  >
              Kontrak Kerja
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DataDetail;