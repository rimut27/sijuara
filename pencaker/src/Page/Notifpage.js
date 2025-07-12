import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Notification = ({ title, message, time }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{message}</Card.Text>
                        <Card.Text className="text-muted">{time}</Card.Text>
                    </div>
                    <Button variant="outline-primary">Selengkapnya</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

function Notifpage() {
    const notifications = [
  
        {
            title: ' anda menerima rekomendasi',
            message: 'ada beberapa rekomendasi lowongan pekerjaan dan pelatihan untuk anda. silahkan lihat di menu pasar kerja atau pelatihan',
            time: '2 minggu lalu',
        },
        {
            title: 'Profil Anda kami terima',
            message: 'selamat, permohonan verifikasi Anda kami terima..',
            time: '2 bulan lalu',
        },
        {
            title: 'Profil Anda dalam tahap verifikasi',
            message: 'Profil anda dalam tahap verifikasi oleh admin Assessment Center. Informasi lebih lanjut hubungi call center pada halaman bantuan.',
            time: '2 bulan lalu',
        },
        {
            title: 'Profil Anda kami tolak',
            message: 'Mohon maaf, permohonan verifikasi Anda kami tolak. Informasi lebih lanjut hubungi call center pada halaman bantuan.',
            time: '3 bulan lalu',
        },
        {
            title: 'Profil Anda dalam tahap verifikasi',
            message: 'Profil anda dalam tahap verifikasi oleh admin Assessment Center. Informasi lebih lanjut hubungi call center pada halaman bantuan.',
            time: '3 bulan lalu',
        },
    ];


    const handleConfirm = () => {
        const result = window.confirm('Wawancara Sekarang ?');
        if (result) {
            window.confirm('Nyalakan Kamera');
        } else {
          alert('Batal Wawancara');
        }
      };

    return (
        <Container>
            <h2 className="my-4">Notifikasi</h2>
            <div>
                        <Card className="mb-3">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title>anda diterima kerja</Card.Title>
                                        <Card.Text>selamat anda diterima kerja, di PT. XYZ sebagai Software Engineer</Card.Text>
                                        <Card.Text className="text-muted">2 hari lalu</Card.Text>
                                    </div>
                                    <Button onClick={handleConfirm} variant="outline-primary">lakukan wawancara</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
            {notifications.map((notification, index) => (
                <Notification
                    key={index}
                    title={notification.title}
                    message={notification.message}
                    time={notification.time}
                />
            ))}
        </Container>
    );
}

export default Notifpage;