import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function DreamJob(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0">
          <Card.Header>Dream Job</Card.Header>
          <Card.Body>
            {props.dream.map((x, i) => (
              <Card.Text key={i}>{x}</Card.Text>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DreamJob;
