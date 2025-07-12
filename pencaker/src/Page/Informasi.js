import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Informasi() {
  return (
    <div>
      <h1>
        Informasi heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default Informasi;