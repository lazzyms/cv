import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaMedium,
  FaReddit,
} from "react-icons/fa";

function Social(props) {
  return (
    <Row className="justify-content-center mt-5 align-items-center">
      <Col>
        <Card className="card-shadow border-0 bg-dark text-light">
          <Card.Body className="mx-3 text-center">
            <Button variant="dark" size="lg" href={props.links.instagram}>
              <FaInstagram />
            </Button>
            <Button variant="dark" size="lg" href={props.links.facebook}>
              <FaFacebook />
            </Button>
            <Button variant="dark" size="lg" href={props.links.twitter}>
              <FaTwitter />
            </Button>
            <Button variant="dark" size="lg" href={props.links.medium}>
              <FaMedium />
            </Button>
            <Button variant="dark" size="lg" href={props.links.reddit}>
              <FaReddit />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Social;
