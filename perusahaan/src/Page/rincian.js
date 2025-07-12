import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditFormtrainerodal from './ubahdata/Formtrainer';

function Rincian () {
    const { id } = useParams();
    let navigate = useNavigate();

    
    const [showFormtranerModal, setShowormtranerModal] = useState(false);
    const handleormtranerodalClose = () => setShowormtranerModal(false);
    const handleormtranerModalShow = () => setShowormtranerModal(true);
    const handleConfirm = () => {
        const result = window.confirm('Anda Yakin akan Menghapus Lowongan Kerja ?');
        if (result) {
          alert('Pekerjaan berhasil di Hapus');
        } else {
        alert('Pekerjaan gagal di Hapus');
        
        }
      };

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
    const item = data.find((job) => job.id.toString() === id);

    if (!item) {
        return <div>Lowongan tidak ditemukan</div>;
    }

    function handleGoBack() {
        navigate(-1);
    }

    return (
        <Container>
            <h1><Button variant="secondary " className='' onClick={handleGoBack}>&#129056;</Button>
                Detail Latihan Kerja</h1>
            <br />
            <Row >
                <Col>
                <table>

                    <tbody>
                        <tr>
                            <th>Nama Pelatihan</th>
                            <td>{item.namapelatihan}</td>
                        </tr>
                        <tr>
                            <th>Nama Perusahaan</th>
                            <td>{item.namaperusahaan}</td>
                        </tr>
                        <tr>
                            <th>Jenis Perusahaan</th>
                            <td>{item.jenisperusahaan}</td>
                        </tr>
                        <tr>
                            <th>Lokasi</th>
                            <td>{item.lokasipelatihan}</td>
                        </tr>
                        <tr>
                            <th>Deskripsi</th>
                            <td>{item.deskripsipelatihan}</td>
                        </tr>
                        <tr>
                            <th>Keuntungan</th>
                            <td>{item.keuntunganpelatihan}</td>
                        </tr>
                        <tr>
                            <th>Syarat Mengikuti Pelatihan</th>
                            <td>{item.syaratpelatihan}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Mulai</th>
                            <td>{item.tanggalmualai}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Selesai</th>
                            <td>{item.tanggalselesai}</td>
                        </tr>
                        <tr>
                            <th>tingkat Kesulitan</th>
                            <td>{item.tingkatkesulitan}</td>
                        </tr>
                        <tr>
                            <th>kuota Peserta</th>
                            <td>{item.kuotapeserta}</td>
                        </tr>
                        <tr>
                            <th>Bidang Pelatihan</th>
                            <td>{item.bidangpelatihan}</td>
                        </tr>
                        <tr>
                            <th>Batasan Usia</th>
                            <td>{item.usia}</td>
                        </tr>
                       
                    </tbody>
                </table>

                </Col>
                <Col>
                   <Button variant="success" style={{ width: '18rem', height: "3rem" }}  onClick={handleConfirm} >
        Hapus
      </Button>
      <br />
      <br />
      <Button style={{ width: '18rem', height: "3rem" }} onClick={handleormtranerModalShow}  variant='success'>
            Buat Pelatihan
          </Button>
          < EditFormtrainerodal show={showFormtranerModal} handleClose={handleormtranerodalClose} />
                </Col>
            </Row>
            <Table striped bordered hover className='mt-5'>
            </Table>
        </Container>
    );
}

export default Rincian ;
