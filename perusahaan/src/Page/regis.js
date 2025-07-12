import React from 'react';
import { Container, Form, Button, Nav } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laptop from "./icon/Screenshot 2024-07-04 113522.png"
import Logo from "./icon/logo-sijuara-with-text.svg"
import Log2 from "./icon/jabar.png"
import { Link } from 'react-router-dom';

function RegisForm() {
    return (
        <Container>
            <Row>
                <Col xs={6}
                    bg="light"
                    data-bs-theme="light">
                    <Row className="justify-content-md-center">

                        <Col md="auto">

                            <img src={Logo} alt="" width={100} height={50} />
                            <h2 className="mb-3">Selamat Datang!</h2>
                            <p>Masukkan Email anda </p>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="masukkan email anda" required />
                                </Form.Group>
<br />
                                <p>Tipe Pengguna</p>
                                <Form.Select aria-label="Default select example">
                                  
                                    <option value="pencari Kerja">pencari Kerja</option>
                                    <option value="Perusaahaan ">Perusaahaan</option>
                                </Form.Select>
                                <Button className="mt-3 w-100" variant="success" type="submit">
                                    Daftar
                                </Button>
                                <div className="mt-3 text-center">
                                    Sudah Memiliki Akun
                                    <Nav.Link as={Link} to="/Login" style={{ color: 'blue' }}>Masuk</Nav.Link>

                                </div>

                            </Form>
                            <div className="text-center mt-3">
                                <img src={Log2} alt="Dishnakertrans" style={{ width: '100px' }} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col data-bs-theme="light" className="d-none d-md-block">
                    <img src={laptop} alt="Office" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                </Col>
            </Row>
        </Container>

    );
};
export default RegisForm;