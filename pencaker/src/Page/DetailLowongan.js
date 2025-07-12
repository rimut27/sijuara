import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function DetailLowongan() {
  const { id } = useParams();
  let navigate = useNavigate();


  const handleConfirm = () => {
    const result = window.confirm('Apakah anda yakin akan melamar pekerjaan ini?');
    if (result) {
      alert('Pekerjaan berhasil dilamar');
    } else {
      alert('Pekerjaan tidak dilamar');
    }
  };
  const data = [
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

  ];

  const item = data.find((job) => job.id.toString() === id);

  if (!item) {
    return <div>Lowongan tidak ditemukan</div>;
  }

  function handleGoBack() {
    navigate(-1);
  }


  return (

    <Container>

      <h1><Button variant="secondary " className='' onClick={handleGoBack}>&#129056;</Button>
        Detail Lowongan Pekerjaan</h1>
      <br />
      <Row >
        <Col>
          <tbody>
            <tr>
              <th>Nama Perusahaan</th>
              <td>{item.NamaPerusahaan}</td>
            </tr>
            <tr>
              <th>Jenis Perusahaan</th>
              <td>{item.JenisPerusahaan}</td>
            </tr>
            <tr>
              <th>Lokasi</th>
              <td>{item.Lokasi}</td>
            </tr>
            <tr>
              <th>Nama Pekerjaan</th>
              <td>{item.NamaPekerjaan}</td>
            </tr>
            <tr>
              <th>Nilai Kecocokan</th>
              <td>{item.NilaiKecocokan}</td>
            </tr>
            <tr>
              <th>Jumlah Lowongan</th>
              <td>{item.JumlahLowongan}</td>
            </tr>
            <tr>
              <th>Jenis Kontrak</th>
              <td>{item.JenisKontrak}</td>
            </tr>
            <tr>
              <th>Bidang Pekerjaan</th>
              <td>{item.BidangPekerjaan}</td>
            </tr>
            <tr>
              <th>Deskripsi Pekerjaan</th>
              <td>{item.DeskripsiPekerjaan}</td>
            </tr>
            <tr>
              <th>Gaji Minimum</th>
              <td>{item.GajiMinimum}</td>
            </tr>
            <tr>
              <th>Gaji Maximum</th>
              <td>{item.GajiMaximum}</td>
            </tr>
            <tr>
              <th>Tipe Lokasi</th>
              <td>{item.TipeLokasi}</td>
            </tr>
            <tr>
              <th>Negara</th>
              <td>{item.Negara}</td>
            </tr>
            <tr>
              <th>Provinsi</th>
              <td>{item.Provinsi}</td>
            </tr>
            <tr>
              <th>Kabupaten/Kota</th>
              <td>{item.Kabupaten_Kota}</td>
            </tr>
            <tr>
              <th>Kecamatan</th>
              <td>{item.Kecamatan}</td>
            </tr>
            <tr>
              <th>Kelurahan</th>
              <td>{item.Kelurahan}</td>
            </tr>
            <tr>
              <th>Alamat Penempatan</th>
              <td>{item.Alamatpenempatan}</td>
            </tr>
            <tr>
              <th>Fasilitas</th>
              <td>{item.Fasilitas}</td>
            </tr>
            <tr>
              <th>Usia</th>
              <td>{item.Usia}</td>
            </tr>
            <tr>
              <th>Status Pernikahan</th>
              <td>{item.StatusPernikahan}</td>
            </tr>
            <tr>
              <th>Jenis Kelamin</th>
              <td>{item.JenisKelamin}</td>
            </tr>
            <tr>
              <th>Jenis Disabilitas</th>
              <td>{item.JenisDisabilitas}</td>
            </tr>
            <tr>
              <th>Berat Badan</th>
              <td>{item.BeratBadan}</td>
            </tr>
            <tr>
              <th>Tinggi Badan</th>
              <td>{item.TinggiBadan}</td>
            </tr>
            <tr>
              <th>Pendidikan Terakhir</th>
              <td>{item.PendidikanTerakhir}</td>
            </tr>
          </tbody>

        </Col>
        <Col>
          <Button variant='success' onClick={handleConfirm}>
            Lamar Pekerjaan
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className='mt-5'>
      </Table>
    </Container>
  );
}

export default DetailLowongan;
