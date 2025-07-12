import { Modal, Button, Form } from 'react-bootstrap';

function EditProfileModal({ show, handleClose }) {

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Data Perusahaan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form>
            <table>
              <tr>
                <th>Nama Perusahaan</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Email Perusahaan</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Deskripsi</th>
                <td><textarea></textarea></td>
              </tr>
              <tr>  <th>Jenis Perusahaan</th>   
                <tr> 
                  <td>
                    <select >
                      <option>jenis Perusahaan</option>
                      <option>Swasta</option>
                      <option>BUMN</option>
                    </select>
                  </td>
                </tr>
              </tr>
              <tr>
                <th>NIB</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>NPWP</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Visi</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Misi</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Struktur Organisasi</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Aktivitas</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>Foto Perusahaan</th>
                <td><input type="file" /></td>
              </tr>
              <tr>
                <th>Media Sosial</th>
                <td>
                  <td><input type="text" /></td>
                </td>
              </tr>
            </table>
            <button variant="primary" type="button" onClick="addSocialMedia()">Tambah Media Sosial</button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose} style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfileModal