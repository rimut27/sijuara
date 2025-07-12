import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Event() {
  return (
    <div>
      <h1>
        Event heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default Event;