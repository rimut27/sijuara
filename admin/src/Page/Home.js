import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Orang from "./icon/orang.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
 
  return (
    <div className="App m3 center">
      <Card className="bg-info " height={450}>
        <Card.Img src={Orang} alt="Card image" sizes="5%" />
        <Card.ImgOverlay className="m-5">
          <Card.Title className="text-white">
            <h2>Haloo Admin </h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container className="mt-5">
      </Container>

    </div>
  );
}

export default Home;
