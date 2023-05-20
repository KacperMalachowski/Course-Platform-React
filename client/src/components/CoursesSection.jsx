import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { dummyCourses } from "../FakeData.js";

const CoursesSection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        CoursesSection
        {dummyCourses.map(({ courseTitle, courseDescripton, courseImage }) => (
          <Card
            style={{
              padding: "3rem",
              margin: "3rem",
              minWidth: "60%",
              maxWidth: "50%",
            }}
          >
            <Card.Img
              variant="top"
              style={{ maxHeight: "8rem", maxWidth: "8rem" }}
              src={courseImage}
            />
            <Card.Body>
              <Card.Title>{courseTitle}</Card.Title>
              <Card.Text>{courseDescripton}</Card.Text>
              <Button variant="primary">Zapisz się na kurs!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CoursesSection;
