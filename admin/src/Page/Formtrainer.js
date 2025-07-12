import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

 function EditFormtrainerodal({ show, handleClose }) {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [benefits, setBenefits] = useState('');
  const [requirements, setRequirements] = useState('');
  const [trainingDateStart, setTrainingDateStart] = useState('');
  const [trainingDateEnd, setTrainingDateEnd] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [participantQuota, setParticipantQuota] = useState('');
  const [trainingField, setTrainingField] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [trainingName, setTrainingName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    console.log('Training Name:', trainingName);
    console.log('Location:', location);
    console.log('Description:', description);
    console.log('Benefits:', benefits);
    console.log('Requirements:', requirements);
    console.log('Training Date Start:', trainingDateStart);
    console.log('Training Date End:', trainingDateEnd);
    console.log('Difficulty Level:', difficultyLevel);
    console.log('Participant Quota:', participantQuota);
    console.log('Training Field:', trainingField);
    console.log('Age Limit:', ageLimit);
  };
  const handleConfirm = () => {
    const result = window.confirm('Anda Yakin akan Meng-upload Lowongan Kerja ?');
    if (result) {
      alert('Pekerjaan berhasil di upload');
    } else {
    alert('Pekerjaan gagal di upload');
    
    }
  };

    
  return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Form Pelatihan Kerja</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nama Pelatihan</td>
              <td>
                <input
                  type="text"
                  value={trainingName}
                  onChange={(event) => setTrainingName(event.target.value)}
                />
              </td>
            </tr>
          
            <tr>
              <td>Lokasi</td>
              <td>
                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Deskripsi</td>
              <td>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Keuntungan</td>
              <td>
                <textarea
                  value={benefits}
                  onChange={(event) => setBenefits(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Syarat Mengikuti</td>
              <td>
                <textarea
                  value={requirements}
                  onChange={(event) => setRequirements(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Pelatihan</td>
              <td>
                <input
                  type="text"
                  value={trainingField}
                  onChange={(event) => setTrainingField(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Tanggal Mulai</td>
              <td>
                <input
                  type="date"
                  value={trainingDateStart}
                  onChange={(event) => setTrainingDateStart(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Tanggal Selesai</td>
              <td>
                <input
                  type="date"
                  value={trainingDateEnd}
                  onChange={(event) => setTrainingDateEnd(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Tingkat Kesulitan</td>
              <td>
                <input
                  type="text"
                  value={difficultyLevel}
                  onChange={(event) => setDifficultyLevel(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Kuota Peserta</td>
              <td>
                <input
                  type="number"
                  value={participantQuota}
                  onChange={(event) => setParticipantQuota(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Batasan Usia</td>
              <td>
                <input
                  type="text"
                  value={ageLimit}
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

export default EditFormtrainerodal