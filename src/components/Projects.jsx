import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaExternalLinkAlt } from "react-icons/fa";
function Projects() {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0 bg-dark text-light text-center">
          <Card.Header>
            <a href="https://github.com/lazzyms/cv/wiki/Projects">
              Projects <FaExternalLinkAlt />
            </a>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
}

export default Projects;
