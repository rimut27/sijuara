import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditEDokumenModal({ show, handleClose }) {
  const [formState, setFormState] = useState({
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log(formState);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Dokumen</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formIjazah">
          <Form.Label>Rekomendasi Kesehatan</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan   berformat .pdf
          </Form.Text>
          <Form.Group controlId="formIjazah">
          <Form.Label>Sertifikat Kesehatan</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan berformat .pdf
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formIjazah">
          <Form.Label>Rekomendasi Paspor</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan berformat .pdf
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formIjazah">
          <Form.Label>Paspor</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan   berformat .pdf
          </Form.Text>
        </Form.Group>

        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="light" onClick={handleClose} style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}>
        Simpan
      </Button>
    </Modal.Footer>
  </Modal>
);
}

export default EditEDokumenModal