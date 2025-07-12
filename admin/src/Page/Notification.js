// src/components/Notification.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

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

export default Notification;