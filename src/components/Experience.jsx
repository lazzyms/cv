import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Experience(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0">
          <Card.Header>Work Experience</Card.Header>
          <Card.Body className="mx-3">
            {props.jobs.map((x, i) => (
              <div className="my-3" key={i}>
                <Card.Title className="font-weight-bold">
                  {x.company + " - " + x.location}
                </Card.Title>
                <Card.Text>
                  ({x.startedAt + " - " + (x.endedAt ? x.endedAt : "Current")})
                </Card.Text>
                <ListGroup variant="flush">
                  {x.work.map((y, i) => (
                    <ListGroup.Item key={i}>{y}</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;
