import { Modal, Button, Form } from 'react-bootstrap';

 function EditminatModal({ show, handleClose }) {
  
  return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Kompetensi dan Minat</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="Kompetensi">
          <Form.Label>Kompetensi</Form.Label>
          <Form.Control type="text" defaultValue="" />
        </Form.Group>

        <Form.Group controlId=" Minat">
          <Form.Label> Minat</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
     
        <Form.Group controlId="Sertifikat">
          <Form.Label>Sertifikat</Form.Label>
          <div className="custom-file">
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            <Form.Label className="custom-file-label" htmlFor="customFile">
              Upload dokumen (Max: 10mb)
            </Form.Label>
          </div>
          <Form.Text className="text-muted">
            Upload scan Sertifikat berformat .pdf
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

export default EditminatModal