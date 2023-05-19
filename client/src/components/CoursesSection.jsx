import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CoursesSection() {
  return (
    <div>
      CoursesSection
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Zapisz się na kurs!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CoursesSection;
