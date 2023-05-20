import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
<<<<<<< HEAD
=======

>>>>>>> new-course-form
const NewCourseForm = () => {
  return (
    <>
      NewCourseForm
<<<<<<< HEAD
      <Card>
        <Form className="mb-3">
          <FloatingLabel label="Nazwa kursu" className="mb-3">
            <Form.Control as="textarea" placeholder="Opis kursu" />
=======
      <Card style={{ padding: "5rem", margin: "5rem" }}>
        <Form className="mb-3">
          <Form.Label>
            <h3>Dodaj nowy kurs!</h3>
          </Form.Label>
          <br />
          <Form.Text className="text-muted mb-3">
            Dodaj kurs swojego autorstwa! Pamiętaj że pole "Nazwa kursu" ma
            długość maksymalnie 200 znaków a pole "Opis kursu" 2200 znaków!
          </Form.Text>
          <FloatingLabel label="Nazwa kursu" className="mb-3">
            <Form.Control placeholder="Nazwa kursu" />
>>>>>>> new-course-form
          </FloatingLabel>
          <FloatingLabel className="mb-3" label="Opis kursu">
            <Form.Control
              as="textarea"
              placeholder="Opis kursu"
<<<<<<< HEAD
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button className="mb-3" variant="primary" type="submit">
            Submit
=======
              maxLength="2200"
              style={{ height: "100px", maxHeight: "400px" }}
            />
          </FloatingLabel>
          <Button className="mb-3" variant="primary" type="submit">
            Dodaj nowy kurs!
>>>>>>> new-course-form
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default NewCourseForm;
