import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Skills(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0">
          <Card.Header>Skills</Card.Header>
          <Card.Body>
            <Row>
              <Col md="6">
                <ListGroup variant="flush">
                  <ListGroup.Item variant="secondary">Primary</ListGroup.Item>
                  {props.primary.map((x, i) => (
                    <ListGroup.Item key={i}>{x}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md="6">
                <ListGroup variant="flush">
                  <ListGroup.Item variant="secondary">
                    Familiar with
                  </ListGroup.Item>
                  {props.familiar.map((x, i) => (
                    <ListGroup.Item key={i}>{x}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Skills;
