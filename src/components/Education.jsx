import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Education(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0 bg-dark text-light">
          <Card.Header>Education</Card.Header>
          <Card.Body>
            {props.edu.map((x,i) => (
              <div key={i}>
                <Card.Title className="font-weight-bold">
                  {x.degree} <label>({x.batch})</label>
                </Card.Title>
                <Card.Text>{x.institute}</Card.Text>
                <Card.Text>{x.grades}</Card.Text>
              </div>
            ))}
            <Card.Text>{props.data}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Education;
