import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';

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
            title: 'Anda memiliki beberapa pelamar kerja',
            message: 'silihhkan cek lowongan kerja Software Enginer',
            time: '1 minggu lalu',
        },
        {
            title: 'Profil Anda Terverifikasi',
            message: 'Informasi lebih lanjut hubungi call center pada halaman bantuan.',
            time: '1 bulan lalu',
        },
        {
            title: 'Profil Anda kami tolak',
            message: 'Mohon maaf, permohonan verifikasi Anda kami tolak. Informasi lebih lanjut hubungi call center pada halaman bantuan.',
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

    return (
        <Container>
            <h2 className="my-4">Notifikasi</h2>
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