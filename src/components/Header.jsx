import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {
  FaEnvelope,
  FaBloggerB,
  FaPhoneAlt,
  FaGithub,
  FaSkype,
  FaFilePdf,
  FaLinkedin,
} from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";
import md5 from "md5";

function downloadPdf() {
  console.log("clicked");
  let accessKey = process.env.REACT_APP_PDF_ACCESSKEY;
  let secretKey = md5("https://me.mauliksompura.in/react-resume/alohamora");
  let baseUrl = "http://api.pdflayer.com/api/convert";
  let myUrl = encodeURI("https://me.mauliksompura.in/react-resume/");

  let pageSize = "Tabloid";
  window.location.href =
    baseUrl +
    "?access_key=" +
    accessKey +
    "&secret_key=" +
    secretKey +
    "&test=1&document_name=maulik-resume.pdf&document_url=" +
    myUrl +
    "&use_print_media=1&page_size=" +
    pageSize +
    "&viewport=2560x1440&watermark_in_background=0&creator=mauliksompura.in&author=Maulik&custom_unit=px&margin_top=50&margin_bottom=0&margin_left=0&margin_right=0&force=1&&delay=3000";
}

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
        <Row className="text-center justify-content-center">
          <ButtonGroup>
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
            {/* <Button
              variant="light mx-1"
              download="mauliksompura-cv.pdf"
              className="pdfDownload d-none"
              onClick={() => downloadPdf()}
            >
              <FaFilePdf /> Download Resume
            </Button> */}
          </ButtonGroup>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
