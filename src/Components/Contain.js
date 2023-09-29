import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Contain() {
  return (
    <Card className="mt-1-25rem mlr-19-20-rem rounded-2 border-color">
      <Card.Body className="mx-1">
        <Row>
          <Col>
            <p className="heading m-0">Company</p>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Search" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
          <Button variant="primary">Create Company</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Contain;
