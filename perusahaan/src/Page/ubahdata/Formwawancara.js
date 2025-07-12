import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../style/style.css'
function Wawancaraform({ show, handleClose }) {
  const [location, setLocation] = useState('');
  const [tanggal, setTrainingDateStart] = useState('');
  const [waktu, setAgeLimit] = useState('');
  const [typewawancaraa, setTrainingName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log('Type wawamcara', typewawancaraa);
    console.log('Location:', location);
    console.log('interview Date Start:', tanggal);
    console.log('inteview time:', waktu);
  };
  const handleConfirm = () => {
    const result = window.confirm('Anda Yakin akan Melakukan wawancara dengan pelanar ini ?');
    if (result) {
      alert('notifikasi wawamcara sudah dikirim');
    } else {
      alert('notifikasi wawamcara batal dikirim');

    }
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Form Lowongan Kerja</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
        <table>
  <thead>
  </thead>
  <tbody>
    <tr>
      <td>Tipe Wawancara</td>
      <td>
        <select value={typewawancaraa} onChange={(event) => setTrainingName(event.target.value)}>
          <option>Pilih jenis Wawancara</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </td>
    </tr>

    <tr>
      <td>Lokasi Wawancara</td>
      <td>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td class='m-4'>Tanggal Wawancara</td>
      <td>
        <input
          type="date"
          value={tanggal}
          onChange={(event) => setTrainingDateStart(event.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td>Jam Wawancara</td>
      <td>
        <input
          type="time"
          value={waktu}
          onChange={(event) => setAgeLimit(event.target.value)}
        />
      </td>
    </tr>
  </tbody>
</table>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose} style={{ backgroundColor: '#e9ecef', color: '#6c757d' }}>
          Batal
        </Button>
        <Button variant="success" onClick={handleConfirm} >
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Wawancaraform