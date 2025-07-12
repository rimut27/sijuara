import { Modal, Button, Form } from 'react-bootstrap';

function EditPekerjaanModal({ show, handleClose }) {

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Data Pekerjaan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Status Pekerjaan</Form.Label>
            <Form.Control type="text" defaultValue="" />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Curriculum Vitae (.pdf Max 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Cover Letter (.pdf Max 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
          </Form.Group>

          <Form.Group controlId="formTTL">
            <Form.Label>Nama Pekerjaan</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Nama Perusahaan</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Mulai</Form.Label>
            <Form.Control type="date" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Berakhir</Form.Label>
            <Form.Control type="date" defaultValue=" " />
          </Form.Group>

          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Dokumen (file .pdf Maximal 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />            
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

export default EditPekerjaanModal