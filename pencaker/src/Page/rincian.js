import React from 'react';
import { useParams } from 'react-router-dom';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rincian () {
    const { id } = useParams();
    let navigate = useNavigate();

    const handleConfirm = () => {
        const result = window.confirm('Apakah anda yakin akan mengikuti pelatihan kerja ini?');
        if (result) {
          alert('pelatihan berhasil diikuti');
        } else {
          alert('pelatihan gagal diikuti');
        }
      };

    const data = [
        
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
                            <th>Lokaas</th>
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

                </Col>
                <Col>
                    <Button variant='success' onClick={handleConfirm}>
                       Ikuti Pelatihan
                    </Button>
                </Col>
            </Row>
            <Table striped bordered hover className='mt-5'>
            </Table>
        </Container>
    );
}

export default Rincian ;
