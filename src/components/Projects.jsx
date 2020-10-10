import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Projects(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0 bg-dark text-light">
          <Card.Header>Projects</Card.Header>
          <Card.Body className="m-3">
            {props.projects.map((x, i) => (
              <Row key={i}>
                <Card.Title className="font-weight-bold">{x.title}</Card.Title>
                <Card.Text>{x.description}</Card.Text>
                <a href={x.link}>Visit Vrindavan Furniture</a>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Projects;
