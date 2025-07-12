import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BuatDokumen from './BuatDokumen';
function Rekomdendasi() {

  const [showBuatDokumenModal, setShowBuatDokumenModal] = useState(false);
  const handlePBuatDokumenModalClose = () => setShowBuatDokumenModal(false);
  const handleBuatDokumenodalShow = () => setShowBuatDokumenModal(true);


  let navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); // Kembali ke halaman sebelumnya
  }

  const [showFormbuatModal, setShowbuateModal] = useState(false);

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
  const data2 =
    [
      {
        id: 1,
        namapelatihan: "Pelatihan Manajemen Proyek",
        namaperusahaan: "PT. XYZ",
        jenisperusahaan: "Swasta",
        lokasipelatihan: "Jakarta",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami prinsip-prinsip manajemen proyek yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan manajemen proyek, meningkatkan efisiensi, dan meningkatkan kualitas proyek.",
        syaratpelatihan: "Sarjana, minimal 2 tahun pengalaman kerja",
        tanggalmualai: "2024-07-10",
        tanggalselesai: "2024-07-24",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 20,
        bidangpelatihan: "Manajemen",
        usia: "25-45 tahun"
      },
      {
        id: 2,
        namapelatihan: "Pelatihan Analisis Data",
        namaperusahaan: "PT. ABC",
        jenisperusahaan: "BUMN",
        lokasipelatihan: "Bandung",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara analisis data yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan analisis data, meningkatkan kualitas keputusan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 1 tahun pengalaman kerja",
        tanggalmualai: "2024-07-15",
        tanggalselesai: "2024-07-29",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 25,
        bidangpelatihan: "Teknologi",
        usia: "25-50 tahun"
      },
      {
        id: 3,
        namapelatihan: "Pelatihan Komunikasi Efektif",
        namaperusahaan: "PT. DEF",
        jenisperusahaan: "Swasta",
        lokasipelatihan: "Surabaya",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara komunikasi yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan komunikasi, meningkatkan kualitas hubungan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 1 tahun pengalaman kerja",
        tanggalmualai: "2024-07-20",
        tanggalselesai: "2024-08-03",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 30,
        bidangpelatihan: "Komunikasi",
        usia: "25-55 tahun"
      },
      {
        id: 4,
        namapelatihan: "Pelatihan Manajemen Konflik",
        namaperusahaan: "PT. GHI",
        jenisperusahaan: "BUMN",
        lokasipelatihan: "Yogyakarta",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara manajemen konflik yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan manajemen konflik, meningkatkan kualitas hubungan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 2 tahun pengalaman kerja",
        tanggalmualai: "2024-07-25",
        tanggalselesai: "2024-08-08",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 25,
        bidangpelatihan: "Manajemen",
        usia: "25-50 tahun"
      },
      {
        id: 5,
        namapelatihan: "Pelatihan Leadership",
        namaperusahaan: "PT. JKL",
        jenisperusahaan: "Swasta",
        lokasipelatihan: "Bali",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara leadership yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan leadership, meningkatkan kualitas keputusan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 3 tahun pengalaman kerja",
        tanggalmualai: "2024-07-30",
        tanggalselesai: "2024-08-13",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 20,
        bidangpelatihan: "Leadership",
        usia: "25-60 tahun"
      },
      {
        id: 6,
        namapelatihan: "Pelatihan Pengembangan Kepribadian",
        namaperusahaan: "PT. MNO",
        jenisperusahaan: "BUMN",
        lokasipelatihan: "Medan",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara pengembangan kepribadian yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan kepribadian, meningkatkan kualitas hubungan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 1 tahun pengalaman kerja",
        tanggalmualai: "2024-08-01",
        tanggalselesai: "2024-08-15",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 25,
        bidangpelatihan: "Pengembangan Kepribadian",
        usia: "25-55 tahun"
      },
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
      {
        id: 10,
        namapelatihan: "Pelatihan Manajemen Konflik",
        namaperusahaan: "PT. YZ",
        jenisperusahaan: "BUMN",
        lokasipelatihan: "Yogyakarta",
        deskripsipelatihan: "Pelatihan ini membantu peserta memahami cara manajemen konflik yang efektif.",
        keuntunganpelatihan: "Meningkatkan kemampuan manajemen konflik, meningkatkan kualitas hubungan, dan meningkatkan efisiensi.",
        syaratpelatihan: "Sarjana, minimal 2 tahun pengalaman kerja",
        tanggalmualai: "2024-08-20",
        tanggalselesai: "2024-09-03",
        tingkatkesulitan: "Sedang",
        kuotapeserta: 25,
        bidangpelatihan: "Manajemen",
        usia: "25-50 tahun"
      }
    ]


  const [selectedJenisPerusahaan, setSelectedJenisPerusahaan] = useState('');
  const [selectedLokasi, setSelectedLokasi] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [lokasipelatihan, setlokasipelatihan] = useState("");
  const [bidangpelatihan, setbidangpelatihan] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.namapelatihan < b.namapelatihan) return sortOrder === 'asc' ? -1 : 1;
      if (a.namapelatihan > b.namapelatihan) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


  const handleLokasiChange = (e) => {
    setlokasipelatihan(e.target.value);
  };

  const handlebidangChange = (e) => {
    setbidangpelatihan(e.target.value);
  };

  const [originalData] = useState(data);

  const handleReset = () => {
    setData(originalData);
    setSortOrder('asc');
  };

  const getUniqueLocations = () => {
    const uniqueLocations = [...new Set(data.map(item => item.lokasipelatihan))];
    return uniqueLocations;
  };
  const getUniquebidang = () => {
    const getUniquebidang = [...new Set(data.map(item => item.bidangpelatihan))];
    return getUniquebidang;
  };

  const filteredData2 = data2.filter((item) => {
    return (
      (bidangpelatihan === '' || item.bidangpelatihan === bidangpelatihan) &&
      (lokasipelatihan === '' || item.lokasipelatihan === lokasipelatihan)
    );

  });


  const handleConfirm = () => {
    const result = window.confirm('Anda Yakin akan Menghapus Dokuemen ?');
    if (result) {
      alert('Dokumen berhasil di Hapus');
    } else {
      alert('Dokumen gagal di Hapus');

    }
  };

  const filteredData = data.filter((item) => {
    return (
      (selectedJenisPerusahaan === '' || item.JenisPerusahaan === selectedJenisPerusahaan) &&
      (selectedLokasi === '' || item.Lokasi === selectedLokasi)
    );
  });

  return (
    <div className="App mt-3">
      <Container variant="outline-secondary">
        <h1>   <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Rekomdendasi </h1>
        <Row className="mt-5">      
          <Col
            sm={5}
            bg="light"
            data-bs-theme="light"
            className="bg-body-tertiary "
          >
            <h2>  Data Pasar Kerja </h2>
            <br />

            <Row>
              {filteredData.map((item) => (
                <Col md={4} key={item.id} style={{ width: '15rem' }}>
                  <Link to={`/detaillowongankerja/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>
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

          <Col
            sm={5}
            data-bs-theme="light"
            className="bg-body-tertiary m-auto mb-4"
          >
            <h2>Data Pelatihan Kerja </h2>
            <br />
            <Row>
              {filteredData2.map((item, index) => (
                <Col md={4} key={item.id} style={{ width: '15rem' }}>
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
          </Col>

         
        </Row>
      </Container>
    </div>
  );
}


export default Rekomdendasi;