import React, { useState } from "react";
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
import { FiShare } from "react-icons/fi";
import { DiStackoverflow } from "react-icons/di";

function Header(props) {
  const [copied, setCopied] = useState(false);
  let shareProfile = () => {
    let bondUrl = window.location.href;
    console.log(bondUrl);
    if (navigator.share) {
      navigator
        .share({
          title: "Portfolio | M",
          url: bondUrl,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(bondUrl);
      setCopied(true);
    }
  };
  return (
    <Row className="justify-content-center align-items-center">
      <Col md="12" sm="12" className="mb-3 text-center">
        <Image src={props.personal.photo} roundedCircle className="shadow" />
      </Col>
      <Col md="12" sm="12">
        <h1 className="text-light text-uppercase text-center font-weight-bold display-3" style={{  textShadow: '4px 4px #5d5d5d'}}>
          {props.personal.name}{" "}
          
        </h1>
        <Row className="justify-content-center">
          <Button variant="light" href={"mailto:" + props.personal.email}>
            <FaEnvelope />
          </Button>
          <Button variant="light" href={props.personal.blog}>
            <FaBloggerB />
          </Button>
          <Button variant="light" href={"tel:" + props.personal.phone}>
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
          <Button variant="light" href={props.personal.stackoverflow}>
            <DiStackoverflow />
          </Button>
          <Button variant="outline-light" onClick={shareProfile}>
            <FiShare /> {copied ? 'Link Copied' : 'Share Profile Link'}
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
