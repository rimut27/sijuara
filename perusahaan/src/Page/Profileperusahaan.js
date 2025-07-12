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
import EditProfileModal from './ubahdata/EditProfileModal';
import Perusahaan from './icon/perusahaan.jpeg'
function Profile() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);

  const handleProfileModalClose = () => setShowProfileModal(false);
  const handleProfileModalShow = () => setShowProfileModal(true);

  const handleEducationModalClose = () => setShowEducationModal(false);
  const handleEducationModalShow = () => setShowEducationModal(true);

  const profileData = {
    companyName: 'PT. XYZ',
    industry: 'IT, Telekomunikasi, Minyak dan Gas, Enterprise Content Management',
    description: 'PT. XYZ adalah sebuah perusahaan yang bergerak di berbagai bidang, termasuk IT, telekomunikasi, minyak dan gas, serta enterprise content management.',
    vision: 'PT. XYZ ingin menjadi perusahaan energi yang unggul di kawasan Asia Pasifik.',
    mission: 'PT. XYZ ingin menjadi perusahaan yang profesional, etis, dan terbuka.',
    structure: 'PT. XYZ memiliki lima departemen utama: Sales Division, Business Development Division, Business Delivery Division, Business Support Division, dan Finance & Accounting Division.',
    activities: 'PT. XYZ telah melakukan beberapa ekspansi operasi, termasuk mengakuisisi 100% saham Novus Petroleum Ltd. dan menjalin kerja sama dengan Pertamina.',
    nib: '1234567890',
    npwp: '1234567890',
    profileImage: 'https://example.com/profile-image.jpg',
    socialMedia: [
      { name: 'Facebook', link: 'https://www.facebook.com/ptxyz' },
      { name: 'Twitter', link: 'https://www.twitter.com/ptxyz' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/company/ptxyz' },
    ],
  };


  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#profile">
      <Container >
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
                      src="https://ui-avatars.com/api/?name=PTXyz&background=random&color=fff"
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="edit-icon">✏️</div>
                  </div>
                  <div className="profile-info">
                    <p>PT.  XYZ</p>
                    <p>XYZ@gmail.com</p>
                  </div>
                </div>
              </Row>
              <Row>
                <h6 className="mt-3 mb-1">Profilku </h6>
                <Row>
                  <Col>
                    <ListGroup>
                      <ListGroup.Item action href="#profile" >
                        Lihat Profil
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link7">
                        Pengaturan
                      </ListGroup.Item>
                      <ListGroup.Item as={Link} to="/" action variant="danger" >
                        Keluar
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col
              xs={6}
              data-bs-theme="light"
              className="bg-body-tertiary m-auto mb-4"
            >
              <div className>
                <Tab.Content>
                  <Tab.Pane eventKey="#profile">
                    <h1>Profil Profileperusahaan</h1>
                    <table className="table">
                      <td>
                        <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handleProfileModalShow}>
                          Ubah
                        </a>
                        <EditProfileModal show={showProfileModal} handleClose={handleProfileModalClose} />
                      </td>
                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <div>
                          <p>{profileData.companyName}</p>
                          <p>
                            Deskripsi
                            <br />
                            {profileData.description}
                          </p>
                          <p>
                            Jenis Perusahaan <br />
                           Swasta</p>
                          <p>
                            NIB <br />
                            {profileData.nib}</p>
                          <p>
                            NPWP
                            <br></br>
                            {profileData.npwp}</p>
                          <p>
                            Visi <br />
                            {profileData.vision}</p>
                          <p>
                            Misi <br />{profileData.mission}</p>
                          <p>
                            Struktur Organisasi <br />{profileData.structure}
                          </p>
                          <p> Aktivitas <br />
                            {profileData.activities}</p>
                          <p>Foto Perusahaan</p>
                          <img className="mb-3" src={Perusahaan} alt="Profile Image" />

                          <p>Media Sosial</p>
                          {profileData.socialMedia.map((media) => (
                            <a key={media.name}>
                              <a href={media.link}>{media.name}</a>
                            </a>
                          ))}

                        </div>
                      </tbody>
                    </table>

                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                </Tab.Content>

              </div>

            </Col>
          </Row>
        </Col>
      </Container>
    </Tab.Container>
  );
}

export default Profile;
