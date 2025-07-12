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



function Pelatihan() {

    const [data, setData] = useState(
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
    );

    let navigate = useNavigate();

    function handleGoBack() {
        navigate(-1); // Kembali ke halaman sebelumnya
    }
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

    const filteredData = data.filter((item) => {
            return (
                (bidangpelatihan === '' || item.bidangpelatihan ===bidangpelatihan) &&
                (lokasipelatihan=== '' || item.lokasipelatihan === lokasipelatihan)
              );
        
      });
    


    return (
        <div className="App mt-3 ml-3">
            <Container variant="outline-secondary">
                <Row>
                    <h1>   <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Informasi Pelatihan</h1>
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
                                    placeholder="Cari pelatihan Kerja disini"
                                    className="me-2"
                                    aria-label="Cari pelatihan Kerja disini"

                                />
                            </Form>
                            <Form.Text className="text-muted ml-5 mt-4 m">
                                Bidang Pelatihan
                            </Form.Text>

                            <Row className='mb-4'>
                            <Form.Control as="select" value={bidangpelatihan} onChange={handlebidangChange}>
                            <option value="">Semua Bidang</option>
                                    {getUniquebidang().map((Bidang, index) => (
                                        <option key={index} value={Bidang}>{Bidang}</option>
                                    ))}
                            </Form.Control>
                             </Row>
                            <Row className=''>
                                <Form.Text className="text-muted ml-5  mb-4">
                                    Lokasi
                                </Form.Text>

                                <Form.Control as="select" value={lokasipelatihan} onChange={handleLokasiChange}>
                                <option value="">Semua Lokasi</option>
                                    {getUniqueLocations().map((lokasi, index) => (
                                        <option key={index} value={lokasi}>{lokasi}</option>
                                    ))}
                                </Form.Control>
                            </Row>

                            <Row className="mt-4 m-auto">
                                <Col>
                                    <Button
                                        className="m-auto"
                                        style={{ width: "7rem", height: "50px" }}
                                        variant="success"
                                    >
                                        Terima
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        className="m-auto"
                                        style={{ width: "7rem", height: "50px" }}
                                        variant="success"
                                    >
                                        Terbaru
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        className="m-auto"
                                        style={{ width: "10rem", height: "50px" }}
                                        variant="success"
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
                                    variant="success"
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
                            {filteredData.map((item, index) => (
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
                    </Col>
                    <Col md="auto"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Pelatihan;