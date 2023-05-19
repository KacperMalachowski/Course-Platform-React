import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const NewCourseForm = () => {
  return (
    <>
      NewCourseForm
      <Card>
        <Form className="mb-3">
          <FloatingLabel label="Nazwa kursu" className="mb-3">
            <Form.Control as="textarea" placeholder="Opis kursu" />
          </FloatingLabel>
          <FloatingLabel className="mb-3" label="Opis kursu">
            <Form.Control
              as="textarea"
              placeholder="Opis kursu"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button className="mb-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default NewCourseForm;
