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
import EditFormtrainerodal from './ubahdata/Formtrainer';


function Pelatihan() {

    const [showFormtranerModal, setShowormtranerModal] = useState(false);
    const handleormtranerodalClose = () => setShowormtranerModal(false);
    const handleormtranerModalShow = () => setShowormtranerModal(true);
  

    const [data, setData] = useState(
        [
            {
                id: 1,
                namapelatihan: "Pelatihan Manajemen Proyek",
                namaperusahaan: "PT. XYZ",
                jenisperusahaan: "BUMN",
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
                namaperusahaan: "PT. XYZ",
                jenisperusahaan: "BUMN",
                lokasipelatihan: "Jakarta",
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
                namaperusahaan: "PT. XYZ",
                jenisperusahaan: "BUMN",
                lokasipelatihan: "Jakarta",
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
                namaperusahaan: "PT. XYZ",
                jenisperusahaan: "BUMN",
                lokasipelatihan: "Jakarta",
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
            (bidangpelatihan === '' || item.bidangpelatihan === bidangpelatihan) &&
            (lokasipelatihan === '' || item.lokasipelatihan === lokasipelatihan)
        );

    });



    return (
        <div className="App mt-3 ml-3">
            <Container variant="outline-secondary">
                <Row>
                    <h1>   <Button variant="secondary" onClick={handleGoBack}>&#129056;</Button> Informasi Pelatihan</h1>
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
                    <Button style={{ width: '18rem', height: "3rem" }} onClick={handleormtranerModalShow}  variant='success'>
            Buat Pelatihan
          </Button>
          < EditFormtrainerodal show={showFormtranerModal} handleClose={handleormtranerodalClose} />
                    <Col md="auto"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Pelatihan;