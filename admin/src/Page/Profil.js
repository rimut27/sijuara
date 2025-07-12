import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Profile() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#profile">
      <Container className="center" >

        <Col>
          <Row>
            <Col sm={3}
              bg="light"
              data-bs-theme="light"
              className="bg-body-tertiary" variant="outline-secondary">
              <Row>
                <div className="profile-card m-2">
                  <div className="profile-header center">
                    <img
                      src="https://ui-avatars.com/api/?name=Ad&background=random&color=fff"
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="edit-icon">✏️</div>
                  </div>
                  <div className="profile-info">
                    <h2>Admin</h2>
                  </div>
                  <div className="profile-status">
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "25%" }}></div>
                    </div>
                    <div className="validation-status">
                      <span className="validation-dot"></span> Tervalidasi
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <Row>
                  <Col>
                    <ListGroup>
                      <ListGroup.Item as={Link} to="/" action variant="danger" >
                        Keluar
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Row>
            </Col>
            </Row>
            </Col>
          </Container>
            </Tab.Container>
  );
}

export default Profile;
