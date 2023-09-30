import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";

function Contain() {
  return (
    <Card className="mt-1-25rem mlr-19-20-rem rounded-2 border-color">
      <Card.Body className="mx-1">
        <Row>
          <Col lg={7} className="px-0 ps-2">
            <p className="heading m-0">Company</p>
          </Col>
          <Col lg={3} className="px-0 ps-5">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  className="form-control search"
                  type="email"
                  placeholder="Search"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2} className="px-0 ps-5">
            <Button className="btn btn-create">Create Company</Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Table striped className="custom">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Company Name</th>
                  <th>Short Name</th>
                  <th>Initial</th>
                  <th>Status</th>
                  <th>Branch</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0001</td>
                  <td>B.G.Chitale Dairy</td>
                  <td>BGCD</td>
                  <td>PROD</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>0002</td>
                  <td>M/S B.G.Chitale Dairy</td>
                  <td>MBGC</td>
                  <td>STOR</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>0003</td>
                  <td>B.G.Chitale Dairy</td>
                  <td>BGCD</td>
                  <td>PROD</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Contain;
