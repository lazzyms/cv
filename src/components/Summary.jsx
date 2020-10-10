import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Summary(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0">
          <Card.Header>Summary</Card.Header>
          <Card.Body>
            <Card.Text>{props.data}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Summary;
