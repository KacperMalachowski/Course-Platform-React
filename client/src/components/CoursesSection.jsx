import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CoursesSection = () => {
  return (
    <>
      CoursesSection
      <Card style={{ padding: "5rem", margin: "5rem" }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="outline-success">Zapisz się na kurs!</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CoursesSection;
