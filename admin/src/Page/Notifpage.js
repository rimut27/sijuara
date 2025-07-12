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
            title: 'Ada Data yang Harus Diverifikksi',
            message: 'beberappa data masuk, dan memerlukan verifkasi',
            time: '2 bulan lalu',
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