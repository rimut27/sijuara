import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import EditFormjobModal from './Formjob';
import EditFormtrainerodal from './Formtrainer'; 

function BuatDokumen({ show, handleClose }) {
  const [showFormjobModal, setShowProfileModal] = useState(false);
  const handlePFormjobModalClose = () => setShowProfileModal(false);
  const handleFormjobModalShow = () => setShowProfileModal(true);

  const [showFormtranerModal, setShowormtranerModal] = useState(false);
  const handleormtranerodalClose = () => setShowormtranerModal(false);
  const handleormtranerModalShow = () => setShowormtranerModal(true);


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Pilih Type Dokuemen </Modal.Title>
</Modal.Header>
      <Modal.Footer>
      <Button style={{ width: '18rem', height: "3rem" }} onClick={handleormtranerModalShow}  variant='success'>
            Buat Pelatihan
          </Button>
          < EditFormtrainerodal show={showFormtranerModal} handleClose={handleormtranerodalClose} />
        <Button style={{ width: '18rem', height: "3rem" }} onClick={handleFormjobModalShow} variant='success'>
            Buat Lowongan
          </Button>
          <EditFormjobModal show={showFormjobModal} handleClose={handlePFormjobModalClose} />
      </Modal.Footer>
    </Modal>
  );
}

export default BuatDokumen