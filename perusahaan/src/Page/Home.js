
import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function  Home () {
  return (
    <Container fluid>
      <Row className="my1">
        <Col>
          <Card className="p-3">
            <h3>Selamat Datang, <span className="font-weight-bold">PT. XYZ</span></h3>
            <h4>Company Dashboard Sijuara</h4>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="p-3">
            <h5>PT. XYZ</h5>
            <p>XYZ@gmail.com</p>
            <p>Kelengkapan Profil: <Badge bg="info">4%</Badge></p>
            <Badge bg="danger">Belum Tervalidasi</Badge>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Card className="p-3">
            <p>Perusahaan Anda Belum Tervalidasi! <Button variant="link"> 
            <Nav.Link className="m-auto" as={Link} to="/Profileperusahaan">
            Lihat profil
            </Nav.Link></Button></p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Informasi</h4>
        </Col>
      </Row>
      <Row>
        {[...Array(6)].map((_, idx) => (
          <Col md={4} className="mb-3" key={idx}>
            <Card>
              <Card.Img variant="right"   />
              <Card.Body>
                <Card.Title>Instagram working on 'Exclusive Stories' for subscribers</Card.Title>
                <Card.Text>Instagram could be jumping on the paid subscription...</Card.Text>
                <Button variant="link">Berita</Button> - <small className="text-muted">52 mins ago</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;