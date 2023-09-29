import React from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import Contain from "./Contain";

function MainContent() {
  return (
    <div>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Contain />
        </Col>
      </Row>
    </div>
  );
}

export default MainContent;
