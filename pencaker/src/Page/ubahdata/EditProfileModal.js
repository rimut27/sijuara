import { Modal, Button, Form } from 'react-bootstrap';

function EditProfileModal({ show, handleClose }) {

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Data Diri</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control type="text" defaultValue="Dewska Ariani" />
          </Form.Group>

          <Form.Group controlId="formJenisKelamin">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Control as="select">
              <option>Pilih jenis kelamin</option>
              <option>Perempuan</option>
              <option>Laki-laki</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formTTL">
            <Form.Label>Tempat, Tanggal Lahir</Form.Label>
            <Form.Control type="text" placeholder="Tulis tempat, tanggal lahir" />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Tinggi Badan</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Berat Badan</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formTahunLulus">
          <Form.Label>Status Pernikahan</Form.Label>
          <Form.Control as="select">
            <option>Status Pernikahan</option>
            <option>Belum</option>
            <option>Sudah</option>
            <option>Janda/Duda</option>
          </Form.Control>
        </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Nomor Hp</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Tentang Diri</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>Foto   (Maximal 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label>No KTP</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>
          <Form.Group controlId="formNamaLengkap">
            <Form.Label> File KTP (file .pdf Maximal 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
          </Form.Group>

          <Form.Group controlId="formNamaLengkap">
            <Form.Label>No KK</Form.Label>
            <Form.Control type="text" defaultValue=" " />
          </Form.Group>

          <Form.Group controlId="formNamaLengkap">
            <Form.Label>File KK (file .pdf Maximal 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
            
          </Form.Group>
          <Form.Group controlId="formAlamat">
            <Form.Label>Alamat KTP</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Tulis alamat KTP" />
          </Form.Group>

          <Form.Group controlId="formAlamatDomisili">
            <Form.Label>Alamat Domisili</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Tulis alamat domisili" />
          </Form.Group>
        </Form>
        <Form.Group controlId="formNamaLengkap">
            <Form.Label>Surat Izin Dominsili (file .jpg Maximal 10MB)</Form.Label>
            <Form.Control type="file" className="custom-file-input" id="customFile" />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose} style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfileModal