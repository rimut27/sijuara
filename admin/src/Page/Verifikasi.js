import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

const Verifikasi = () => {
  const [data, setData] = useState([
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
  ]);
  
  
 const dataperusahaan=[
  {
    "id": 1,
    "companyName": "PT. XYZ",
    "industry": "Teknologi",
    "description": "Perusahaan teknologi yang berfokus pada pengembangan software dan solusi digital.",
    "lokasi": "Jakarta",
    "vision": "Menjadi perusahaan teknologi terkemuka di Asia Tenggara.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui teknologi yang inovatif dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti R&D, Sales, dan Marketing.",
    "activities": "Aktivitas utama perusahaan meliputi pengembangan software, penjualan solusi digital, dan pelayanan pelanggan.",
    "nib": "1234567890",
    "npwp": "1234567890",
    "profileImage": "https://example.com/xyz.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/xyz",
      "instagram": "https://www.instagram.com/xyz",
      "twitter": "https://www.twitter.com/xyz"
    }
  },
  {
    "id": 2,
    "companyName": "PT. ABC",
    "industry": "Konstruksi",
    "description": "Perusahaan konstruksi yang berfokus pada pembangunan gedung dan infrastruktur.",
    "lokasi": "Bandung",
    "vision": "Menjadi perusahaan konstruksi terkemuka di Indonesia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui pembangunan infrastruktur yang aman dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Proyek, Operasional, dan Pemasaran.",
    "activities": "Aktivitas utama perusahaan meliputi pembangunan gedung, jalan, dan jembatan, serta pelayanan pelanggan.",
    "nib": "2345678901",
    "npwp": "2345678901",
    "profileImage": "https://example.com/abc.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/abc",
      "instagram": "https://www.instagram.com/abc",
      "twitter": "https://www.twitter.com/abc"
    }
  },
  {
    "id": 3,
    "companyName": "PT. DEF",
    "industry": "Logistik",
    "description": "Perusahaan logistik yang berfokus pada pengangkutan barang dan layanan ekspedisi.",
    "lokasi": "Surabaya",
    "vision": "Menjadi perusahaan logistik terkemuka di Asia.",
    "mission": "Meningkatkan efisiensi dan kecepatan pengiriman barang melalui teknologi dan layanan yang inovatif.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi pengangkutan barang, layanan ekspedisi, dan pelayanan pelanggan.",
    "nib": "3456789012",
    "npwp": "3456789012",
    "profileImage": "https://example.com/def.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/def",
      "instagram": "https://www.instagram.com/def",
      "twitter": "https://www.twitter.com/def"
    }
  },
  {
    "id": 4,
    "companyName": "PT. GHI",
    "industry": "Perbankan",
    "description": "Perusahaan perbankan yang berfokus pada layanan keuangan dan pelayanan pelanggan.",
    "lokasi": "Jakarta",
    "vision": "Menjadi perusahaan perbankan terkemuka di Indonesia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui layanan keuangan yang inovatif dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi pemberian pinjaman, penerimaan deposito, dan pelayanan pelanggan.",
    "nib": "4567890123",
    "npwp": "4567890123",
    "profileImage": "https://example.com/ghi.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/ghi",
      "instagram": "https://www.instagram.com/ghi",
      "twitter": "https://www.twitter.com/ghi"
    }
  },
  {
    "id": 5,
    "companyName": "PT. JKL",
    "industry": "Energi",
    "description": "Perusahaan energi yang berfokus pada pengembangan dan pemasaran energi terbarukan.",
    "lokasi": "Bogor",
    "vision": "Menjadi perusahaan energi terkemuka di Asia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui pengembangan energi terbarukan yang berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti R&D, Operasional, dan Pemasaran.",
    "activities": "Aktivitas utama perusahaan meliputi pengembangan dan pemasaran energi terbarukan, serta pelayanan pelanggan.",
    "nib": "5678901234",
    "npwp": "5678901234",
    "profileImage": "https://example.com/jkl.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/jkl",
      "instagram": "https://www.instagram.com/jkl",
      "twitter": "https://www.twitter.com/jkl"
    }
  },
  {
    "id": 6,
    "companyName": "PT. MNO",
    "industry": "Farmasi",
    "description": "Perusahaan farmasi yang berfokus pada pengembangan dan pemasaran obat-obatan.",
    "lokasi": "Semarang",
    "vision": "Menjadi perusahaan farmasi terkemuka di Asia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui pengembangan obat-obatan yang inovatif dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti R&D, Operasional, dan Pemasaran.",
    "activities": "Aktivitas utama perusahaan meliputi pengembangan dan pemasaran obat-obatan, serta pelayanan pelanggan.",
    "nib": "6789012345",
    "npwp": "6789012345",
    "profileImage": "https://example.com/mno.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/mno",
      "instagram": "https://www.instagram.com/mno",
      "twitter": "https://www.twitter.com/mno"
    }
  },
  {
    "id": 7,
    "companyName": "PT. PQR",
    "industry": "Telekomunikasi",
    "description": "Perusahaan telekomunikasi yang berfokus pada layanan internet dan pelayanan pelanggan.",
    "lokasi": "Bandung",
    "vision": "Menjadi perusahaan telekomunikasi terkemuka di Indonesia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui layanan internet yang inovatif dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi penyediaan layanan internet, pelayanan pelanggan, dan pemasaran.",
    "nib": "7890123456",
    "npwp": "7890123456",
    "profileImage": "https://example.com/pqr.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/pqr",
      "instagram": "https://www.instagram.com/pqr",
      "twitter": "https://www.twitter.com/pqr"
    }
  },
  {
    "id": 8,
    "companyName": "PT. STU",
    "industry": "Perdagangan",
    "description": "Perusahaan perdagangan yang berfokus pada impor dan ekspor barang.",
    "lokasi": "Surabaya",
    "vision": "Menjadi perusahaan perdagangan terkemuka di Asia.",
    "mission": "Meningkatkan efisiensi dan kecepatan perdagangan melalui teknologi dan layanan yang inovatif.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi impor, ekspor, dan pelayanan pelanggan.",
    "nib": "8901234567",
    "npwp": "8901234567",
    "profileImage": "https://example.com/stu.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/stu",
      "instagram": "https://www.instagram.com/stu",
      "twitter": "https://www.twitter.com/stu"
    }
  },
  {
    "id": 9,
    "companyName": "PT. VWX",
    "industry": "Transportasi",
    "description": "Perusahaan transportasi yang berfokus pada layanan angkutan darat dan laut.",
    "lokasi": "Jakarta",
    "vision": "Menjadi perusahaan transportasi terkemuka di Indonesia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui layanan angkutan yang aman dan berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi layanan angkutan darat dan laut, serta pelayanan pelanggan.",
    "nib": "9012345678",
    "npwp": "9012345678",
    "profileImage": "https://example.com/vwx.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/vwx",
      "instagram": "https://www.instagram.com/vwx",
      "twitter": "https://www.twitter.com/vwx"
    }
  },
  {
    "id": 10,
    "companyName": "PT. YZ",
    "industry": "Pertambangan",
    "description": "Perusahaan pertambangan yang berfokus pada eksploitasi dan pemasaran sumber daya alam.",
    "lokasi": "Bogor",
    "vision": "Menjadi perusahaan pertambangan terkemuka di Asia.",
    "mission": "Meningkatkan kualitas hidup masyarakat melalui eksploitasi sumber daya alam yang berkelanjutan.",
    "structure": "Struktur organisasi perusahaan terdiri dari divisi-divisi yang berbeda seperti Operasional, Pemasaran, dan Pelayanan Pelanggan.",
    "activities": "Aktivitas utama perusahaan meliputi eksploitasi dan pemasaran sumber daya alam, serta pelayanan pelanggan.",
    "nib": "1234567890",
    "npwp": "1234567890",
    "profileImage": "https://example.com/yz.png",
    "socialMedia": {
      "facebook": "https://www.facebook.com/yz",
      "instagram": "https://www.instagram.com/yz",
      "twitter": "https://www.twitter.com/yz"
    }
  }
]

  function handleGoBack() {
    Navigate(-1); // Kembali ke halaman sebelumnya
  }
  return (
    <div className="App mt-3 ml-3">
      <Container variant="outline-secondary">
        <Row>
          <h1>   <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Data Perusahaan dan Pencari kerja</h1>
<br />
<br />
<br />
<br />
          <Col
     variant="outline-secondary"
            data-bs-theme="light"
            className=" mb-4 striped bordered"
          >
            <h1>Pencari kerja</h1>
            <Row className='m-3'>
              {data.map((item, index) => (
                <div key={index} className="col-md-5 ">
                  <Card style={{ width: '15rem' }} >
                    <CardTitle className="m-2">{data.nama}</CardTitle>
                    <CardBody>
                      <p><strong>Tingkat Pendidikan:</strong> {data.tingkatPendidikan}</p>
                      <p><strong>Kompetensi:</strong> {data.kompetensi}</p>
                      <Link to={`/Pencaker/${item.id}`}>
                        <Button style={{ width: '10rem', height: "3rem" }} variant='success'>
                          Detail Pencaker 
                        </Button> </Link>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Row>
          </Col>
          <Col
      
            data-bs-theme="light"
            className=" mb-4 striped bordered"
          >
            <h1>Perusahaan</h1>
            <Row className='m-3'>
              {dataperusahaan.map((item, index) => (
                <div key={index} className="col-md-5 ">
                  <Card style={{ width: '15rem' }} >
                    <CardTitle className="m-2">{dataperusahaan.companyName}</CardTitle>
                    <CardBody>
                      <p><strong>industry:</strong> {dataperusahaan.industry}</p>
                      <p><strong>Lokasi:</strong> {dataperusahaan.lokasi}</p>
                      <Link to={`/Perusuahan/${item.id}`}>
                        <Button style={{ width: '10rem', height: "3rem" }} variant='success'>
                          Detail Perusahaan 
                        </Button> </Link>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>



  );
};

export default Verifikasi;