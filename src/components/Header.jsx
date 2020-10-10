import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {
  FaEnvelope,
  FaBloggerB,
  FaPhoneAlt,
  FaGithub,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";

function Header(props) {
  return (
    <Row className="justify-content-center align-items-center">
      <Col md="12" sm="12" className="mb-3 text-center">
        <Image src={props.personal.photo} roundedCircle className="shadow" />
      </Col>
      <Col md="12" sm="12">
        <h1 className="text-light text-uppercase text-center font-weight-bold display-3">
          {props.personal.name}
        </h1>
        <Row className="justify-content-center">
            <Button
              variant="light"
              href={"mailto:" + props.personal.email}
            >
              <FaEnvelope />
            </Button>
            <Button variant="light" href={props.personal.blog}>
              <FaBloggerB />
            </Button>
            <Button
              variant="light"
              href={"tel:" + props.personal.phone}
            >
              <FaPhoneAlt />
            </Button>
            <Button variant="light" href={props.personal.github}>
              <FaGithub />
            </Button>
            <Button variant="light" href={props.personal.skype}>
              <FaSkype />
            </Button>
            <Button variant="light" href={props.personal.linkedIn}>
              <FaLinkedin />
            </Button>
            <Button
              variant="light"
              href={props.personal.stackoverflow}
            >
              <DiStackoverflow />
            </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
