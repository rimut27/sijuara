import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';


const DataDetailPencaker = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  const data = [
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
  ];


  const perusahaan = data.find(item => item.id === parseInt(id, 10));

  if (!perusahaan) {
    return <div>Data not found</div>;
  }

  function handleGoBack() {
    navigate(-1); // Kembali ke halaman sebelumnya
  }

  const handleConfirm = () => {
    const result = window.confirm('Apakah Data Perusahan ini valid ?');
    if (result) {
      alert('Notifikasi Data Valid Sudah Dikirim');
    } else {
      alert('Notifikasi Data Tidak Valid Sudah Dikirim');
    }
  };


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} className='mt-3' md={8}>
          <h2>  <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button>
            Detail Perusahaan</h2>
          <Table striped bordered hover>
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>Nama Perusahaan</td>
                <td> {perusahaan.companyName}</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td> {perusahaan.industry}</td>
              </tr>
              <tr>
                <td>Lokasi</td>
                <td> {perusahaan.lokasi}</td>
              </tr>
              <tr>
                <td>Foto Perusahaan</td>
                <td><a href='FotoPerusahaan'> Foto Perusahaan.jpeg</a></td>
              </tr>
              <tr>
                <td>Visi</td>
                <td> {perusahaan.vision}</td>
              </tr>
              <tr>
                <td>Misi</td>
                <td> {perusahaan.mission}</td>
              </tr>
              <tr>
                <td>Struktur Organisasi</td>
                <td> {perusahaan.structure}</td>
              </tr>
              <tr>
                <td>Aktivitas Utama</td>
                <td> {perusahaan.activities}</td>
              </tr>
              <tr>
                <td>NIB </td>
                <td> {perusahaan.nib}</td>
              </tr>
              <tr>
                <td>NPWP</td>
                <td> {perusahaan.npwp}</td>
              </tr>
              <tr>
                <td>Social Media:</td>
                <td>
                  <ul>
                    <li>Facebook: <a href={perusahaan.socialMedia.facebook}>{perusahaan.socialMedia.facebook}</a></li>
                    <li>Instagram: <a href={perusahaan.socialMedia.instagram}>{perusahaan.socialMedia.instagram}</a></li>
                    <li>Twitter: <a href={perusahaan.socialMedia.twitter}>{perusahaan.socialMedia.twitter}</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <br />
          <br />
          <Button variant="success" onClick={handleConfirm} style={{ width: '18rem', height: "3rem" }}  >
            Verifikasi Data
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DataDetailPencaker;