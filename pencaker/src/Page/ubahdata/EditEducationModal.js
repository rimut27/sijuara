import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditEducationModal({ show, handleClose }) {
  const [formState, setFormState] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
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
      <Modal.Title>Pendidikan</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formJenjang">
          <Form.Label>Jenjang</Form.Label>
          <Form.Control as="select">
            <option>Pilih Jenjang Pendidikan</option>
            <option>SD</option>
            <option>SMP</option>
            <option>SMA/SMK</option>
            <option>Strata 1 (S1)</option>
            <option>Strata 2 (S2)</option>
            <option>Strata 3 (S3)</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formInstitusi">
          <Form.Label>Institusi</Form.Label>
          <Form.Control type="text" placeholder="Tulis Nama Institusi" />
        </Form.Group>

        <Form.Group controlId="formTahunMasuk">
          <Form.Label>Tahun Masuk</Form.Label>
          <Form.Control as="select">
            <option>Pilih Tahun Masuk</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTahunLulus">
          <Form.Label>Tahun Lulus</Form.Label>
          <Form.Control as="select">
            <option>Pilih Tahun Lulus</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formIjazah">
          <Form.Label>Ijazah</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan ijazah berformat .pdf
          </Form.Text>
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

export default EditEducationModal