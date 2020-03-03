import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Label, Input, Button, Table } from "reactstrap";

import "./GrowerHaulerDetailView.css";

import XModal from "../modals/XModal";

function GrowerHaulerDetailView({ isModalOpen, onHandleToggleModal, hgoUser }) {
  const modalBody = (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup row>
                <Label for="accountID" sm={3}>
                  Account ID
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="text"
                    name="accountID"
                    id="accountID"
                    readOnly
                    value={hgoUser.accountID}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="accountName" sm={3}>
                  Account Name
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="text"
                    name="accountName"
                    id="accountName"
                    readOnly
                    value={hgoUser.accountName}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="address" sm={3}>
                  Address
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="textarea"
                    name="address"
                    id="address"
                    readOnly
                    value={hgoUser.address}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="type" sm={3}>
                  Type
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="text"
                    name="type"
                    id="type"
                    readOnly
                    value={hgoUser.type}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="type" sm={3}>
                  Email
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                    value={hgoUser.email}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="phoneNumber" sm={3}>
                  Phone Number
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    readOnly
                    value={hgoUser.phoneNumber}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="growerHauler" sm={3}>
                  Grower/Hauler
                </Label>
                <Col>
                  <Input
                    sm={3}
                    type="text"
                    name="growerHauler"
                    id="growerHauler"
                    readOnly
                    value={hgoUser.grower_hauler}
                  />
                </Col>
              </FormGroup>
            </Form>
            <Row>
              <Col>
                <Button color="primary" block>
                  See Deliveries
                </Button>
              </Col>
              <Col>
                <Button color="primary" block>
                  See Payments
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <h6>Fields</h6>
            </Row>
            <Row>
              <Col>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Field Name</th>
                      <th>Percent Owned</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Field 1</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>Field 2</td>
                      <td>75%</td>
                    </tr>
                    <tr>
                      <td>Field 3</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>Add New*</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <h6>Type History</h6>
            </Row>
            <Row>
              <Col>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Member</td>
                      <td>1/1/2019</td>
                    </tr>
                    <tr>
                      <td>Cash</td>
                      <td>5/7/2019</td>
                    </tr>
                    <tr>
                      <td>Member</td>
                      <td>10/25/2019</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
  return (
    <>
      <XModal
        isModalOpen={isModalOpen}
        modalBody={modalBody}
        onHandleToggleModal={onHandleToggleModal}
        modalSize={"xl"}
        modalId={"modalTitle"}
        modalTitle={"Grower/Hauler Detail View"}
        buttonHappyText={"None"}
        buttonSadText={"Close"}
      />
    </>
  );
}

export default GrowerHaulerDetailView;
