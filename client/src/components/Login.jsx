import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const Login = () => {
  return (
    <>
      Login
      <Card style={{ padding: "5rem", margin: "5rem" }}>
        <Form>
          <Form.Label>
            <h3>Zaloguj się!</h3>
          </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel label="Adres email" className="mb-3">
              <Form.Control
                maxLength="100"
                type="email"
                required
                placeholder="Adres email"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel label="Hasło" className="mb-3">
              <Form.Control
                maxLength="100"
                type="password"
                placeholder="Hasło"
              />
            </FloatingLabel>
            <Form.Text className="text-muted">
              Nie udostępnimy Twoich danych bez Twojej zgody.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Zaloguj się
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Login;
