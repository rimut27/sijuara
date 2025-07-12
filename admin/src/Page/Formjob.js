import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

 function EditFormjobModal({ show, handleClose }) {
    const [jobTitle, setJobTitle] = useState('');
    const [fitValue, setFitValue] = useState(0);
    const [jobCount, setJobCount] = useState(0);
    const [contractType, setContractType] = useState('');
    const [jobField, setJobField] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(0);
    const [locationType, setLocationType] = useState('');
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [regency, setRegency] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');
    const [placementAddress, setPlacementAddress] = useState('');
    const [facilities, setFacilities] = useState('');
    const [age, setAge] = useState(0);
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [disability, setDisability] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [education, setEducation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log('Job Title:', jobTitle);
        console.log('Fit Value:', fitValue);
        console.log('Job Count:', jobCount);
        console.log('Contract Type:', contractType);
        console.log('Job Field:', jobField);
        console.log('Job Description:', jobDescription);
        console.log('Min Salary:', minSalary);
        console.log('Max Salary:', maxSalary);
        console.log('Location Type:', locationType);
        console.log('Country:', country);
        console.log('Province:', province);
        console.log('Regency:', regency);
        console.log('District:', district);
        console.log('Village:', village);
        console.log('Placement Address:', placementAddress);
        console.log('Facilities:', facilities);
        console.log('Age:', age);
        console.log('Marital Status:', maritalStatus);
        console.log('Gender:', gender);
        console.log('Disability:', disability);
        console.log('Weight:', weight);
        console.log('Height:', height);
        console.log('Education:', education);
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
      <Modal.Title>Form Lowongan Kerja</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Form Lowongan Kerja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nama Pekerjaan</td>
              <td>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(event) => setJobTitle(event.target.value)}
                />
              </td>
            </tr>
            
            <tr>
              <td>Jumlah Lowongan</td>
              <td>
                <input
                  type="number"
                  value={jobCount}
                  onChange={(event) => setJobCount(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Jenis Kontrak</td>
              <td>
                <input
                  type="text"
                  value={contractType}
                  onChange={(event) => setContractType(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Bidang Pekerjaan</td>
              <td>
                <input
                  type="text"
                  value={jobField}
                  onChange={(event) => setJobField(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Deskripsi Pekerjaan</td>
              <td>
                <textarea
                  value={jobDescription}
                  onChange={(event) => setJobDescription(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gaji Minimum</td>
              <td>
                <input
                  type="number"
                  value={minSalary}
                  onChange={(event) => setMinSalary(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gaji Maximum</td>
              <td>
                <input
                  type="number"
                  value={maxSalary}
                  onChange={(event) => setMaxSalary(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Tipe Lokasi</td>
              <td>
                <input
                  type="text"
                  value={locationType}
                  onChange={(event) => setLocationType(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Negara</td>
              <td>
                <input
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Provinsi</td>
              <td>
                <input
                  type="text"
                  value={province}
                  onChange={(event) => setProvince(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Kabupaten/Kota</td>
              <td>
                <input
                  type="text"
                  value={regency}
                  onChange={(event) => setRegency(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Kecamatan</td>
              <td>
                <input
                  type="text"
                  value={district}
                  onChange={(event) => setDistrict(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Kelurahan</td>
              <td>
                <input
                  type="text"
                  value={village}
                  onChange={(event) => setVillage(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Alamat Penempatan</td>
              <td>
                <input
                  type="text"
                  value={placementAddress}
                  onChange={(event) => setPlacementAddress(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fasilitas</td>
              <td>
                <input
                  type="text"
                  value={facilities}
                  onChange={(event) => setFacilities(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Usia</td>
              <td>
                <input
                  type="number"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Status Pernikahan</td>
              <td>
                <input
                  type="text"
                  value={maritalStatus}
                  onChange={(event) => setMaritalStatus(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Jenis Kelamin</td>
              <td>
                <input
                  type="text"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Jenis Disabilitas</td>
              <td>
                <input
                  type="text"
                  value={disability}
                  onChange={(event) => setDisability(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Berat Badan</td>
              <td>
                <input
                  type="number"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Tinggi Badan</td>
              <td>
                <input
                  type="number"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Pendidikan Terakhir</td>
              <td>
                <input
                  type="text"
                  value={education}
                  onChange={(event) => setEducation(event.target.value)}
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

export default EditFormjobModal