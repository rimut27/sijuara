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
import EditEducationModal from './ubahdata/EditEducationModal'
import EditminatModal from "./ubahdata/EditminatModal";
import EditPekerjaanModal from './ubahdata/EditPekerjaanModal';
import EditEDokumenModal from "./ubahdata/EditEDokumenModal";

function Profile() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showminatModal, setShowminatModal] = useState(false);
  const [showPekerjaanModal, setShowPekerjaanModal] = useState(false);
  const [showDokumenModal, setshowDokumenModal] = useState(false)


  const handleProfileModalClose = () => setShowProfileModal(false);
  const handleProfileModalShow = () => setShowProfileModal(true);

  const handleEducationModalClose = () => setShowEducationModal(false);
  const handleEducationModalShow = () => setShowEducationModal(true);

  const handleminatModalClose = () => setShowminatModal (false);
  const handleminatModalShow = () => setShowminatModal(true);

  const handlePekerjaanModalClose = () => setShowPekerjaanModal(false);
  const handlePekerjaanModalShow = () => setShowPekerjaanModal(true);

  const handleDokumenModalClose = () => setshowDokumenModal(false);
  const handleDokumenModalShow = () => setshowDokumenModal(true);



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
                      src="https://ui-avatars.com/api/?name=Diviere+Ac&background=random&color=fff"
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="edit-icon">✏️</div>
                  </div>
                  <div className="profile-info">
                    <h2>Dewa Arriani</h2>
                    <p>Dewska Arriani@gmail.com</p>
                  </div>
                  <div className="profile-status">
                    <p>
                      Kelengkapan Profil: <span>25%</span>
                    </p>
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
                <h6 className="mt-3 mb-1">Profilku </h6>
                <Row>
                  <Col>
                    <ListGroup>
                      <ListGroup.Item action href="#profile" >
                        Lihat Profilku
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        BPJS Ketenagakerjaan
                      </ListGroup.Item>
                      <h6 className="mt-3">Riwayatku </h6>
                      <ListGroup.Item action href="#link3">
                        Lamaranku
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link4">
                        Pelatihanku
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link5">
                        Aspirasiku
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link6">
                        Pesan
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
                    <h1>Profilku</h1>
                    <table className="table">
                      <td>Data Diri </td>
                      <td>
                        <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handleProfileModalShow}>
                          Ubah
                        </a>
                      <EditProfileModal show={showProfileModal} handleClose={handleProfileModalClose} />
                      </td>
                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Nama Lengkap</td>
                          <td>Dewaska Arriani</td>
                        </tr>
                        <tr>
                          <td>Jenis Kelamin</td>
                          <td>Perempuan</td>
                        </tr>
                        <tr>
                          <td>TTL</td>
                          <td>Karawang, 11 November 1996</td>
                        </tr>
                        <tr>
                          <td>Tinggi Badan</td>
                          <td>165 cm</td>
                        </tr>
                        <tr>
                          <td>Berat Badan</td>
                          <td>65 kg</td>
                        </tr>
                        <tr>
                          <td>Umur</td>
                          <td>29 tahun</td>
                        </tr>
                        <tr>
                          <td>Status Pernikahan</td>
                          <td>Belum Menikah</td>
                        </tr>
                        <tr>
                          <td>Nomor HP</td>
                          <td>082117169898</td>
                        </tr>
                        <tr>
                          <td>Tentang Diri</td>
                          <td>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</td>
                        </tr>
                        <tr>
                          <td>Foto Diri</td>
                          <td a href="#">foto.jpg</td>
                        </tr>
                        <tr>
                          <td>No KTP</td>
                          <td>320410241196003</td>
                        </tr>
                        <tr>
                          <td>File KTP</td>
                          <td><a href="#">KTP.pdf</a></td>
                        </tr>
                        <tr>
                          <td>No KK</td>
                          <td>320410241196003</td>
                        </tr>
                        <tr>
                          <td>File KK</td>
                          <td><a href="#">KK.pdf</a></td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table">
                      <td>Alamat</td>
                      <td>
                      </td>

                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Alamat KTO</td>
                          <td>Jl. Bangun Merdeka No 17, Kel. Pancasila, Karawang 63213 </td>
                        </tr>
                        <tr>
                          <td>Alamat Dominsili</td>
                          <td>Jl. Bangun Merdeka No 17, Kel. Pancasila, Karawang 63213 </td>
                        </tr>
                        <tr>
                          <td>Izin Dominsili</td>
                          <td>< a href="#">Surat.pdf</a></td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table">
                      <td>Pendidikan</td>
                      <td>
                        
                      <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handleEducationModalShow}>
                          ubah
                        </a>

                        <EditEducationModal show={showEducationModal} handleClose={handleEducationModalClose} />
                      </td>
                    </table>

                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Jenjang</td>
                          <td>Strata 1 (S1)</td>
                        </tr>
                        <tr>
                          <td>Institusi</td>
                          <td>Universitas Indonesia Raya</td>
                        </tr>
                        <tr>
                          <td>Tahun Masuk</td>
                          <td>2015</td>
                        </tr>
                        <tr>
                          <td>Tahun Lulus</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>Ijazah</td>
                          <td><a href="#">Ijazah S1.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Jenjang</td>
                          <td>SMA</td>
                        </tr>
                        <tr>
                          <td>Institusi</td>
                          <td>SMA Indonesia Juara</td>
                        </tr>
                        <tr>
                          <td>Tahun Masuk</td>
                          <td>2012</td>
                        </tr>
                        <tr>
                          <td>Tahun Lulus</td>
                          <td>2015</td>
                        </tr>
                        <tr>
                          <td>Ijazah</td>
                          <td><a href="#">Ijazah SMA.pdf</a></td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <td>Kompetensi dan Minat</td>
                      <td> 
                      <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handleminatModalShow}>
                          Ubah
                        </a>
                      <EditminatModal show={showminatModal} handleClose={handleminatModalClose} />
                      </td>
                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Kompetensi</td>
                          <td>Komputer, Public Speaking, Microsoft Office, Menjahit</td>
                        </tr>
                        <tr>
                          <td>minat</td>
                          <td>Komputer, Public Speaking, Microsoft Office, Menjahit</td>
                        </tr>

                        <tr>
                          <td>Sertivikat</td>
                          <td>
                            < a href="#"> Sertifikat Kompetensi 1.pdf </a>  <br />
                            < a href="#"> Sertifikat Kompetensi 2.pdf </a> <br />
                            < a href="#"> Sertifikat Kompetensi 3.pdf </a> <br />
                          </td>
                        </tr>

                      </tbody>
                    </table>
                    <table className="table">
                      <td>Data Pekerjaan</td>
                      <td>
                      <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handlePekerjaanModalShow}>
                          Ubah
                        </a>
                      <EditPekerjaanModal show={showPekerjaanModal} handleClose={handlePekerjaanModalClose} />
                      </td>
                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Status Pekerjaan</td>
                          <td>Belum Bekerja</td>
                        </tr>
                        <tr>
                          <td>Curriculum Vitae</td>
                          <td><a href="#">Curriculum Vitae.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Cover Letter</td>
                          <td><a href="#">Cover Letter.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Nama Pekerjaan</td>
                          <td>Customer Service</td>
                        </tr>
                        <tr>
                          <td>Nama Perusahaan</td>
                          <td>Bank Indonesia Jaya</td>
                        </tr>
                        <tr>
                          <td>Deskripsi</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
                            dignissim elementum nunc interdum. Arcu aenean mi risus pharetra,
                            felis cursus ut.</td>
                        </tr>
                        <tr>
                          <td>Mulai</td>
                          <td>11/11/2020</td>
                        </tr>
                        <tr>
                          <td>Berakhir</td>
                          <td>11/11/2021</td>
                        </tr>
                        <tr>
                          <td>Dokumen</td>
                          <td><a href="#">Pakelaring BIJ.pdf</a></td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table">
                      <td>Data Dokumen</td>
                      <td>
                      <a href="#" style={{ textDecoration: 'none', alignContent: "flex-end" }} variant="primary" onClick={handleDokumenModalShow}>
                          Ubah
                        </a>
                      <EditEDokumenModal show={showDokumenModal} handleClose={handleDokumenModalClose} />
                      </td>
                    </table>
                    <table className="table mb-3">
                      <tbody>
                        <tr>
                          <td>Rekomendasi Kesehatan</td>
                          <td><a href="#">Rekomendasi Kesehatan.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Sertifikat Kesehatan</td>
                          <td><a href="#">Sertifikat Kesehatan.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Rekomendasi Paspor</td>
                          <td><a href="#">Rekomendasi Paspor.pdf</a></td>
                        </tr>
                        <tr>
                          <td>Paspor</td>
                          <td><a href="#">Paspor.pdf</a></td>
                        </tr>
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
