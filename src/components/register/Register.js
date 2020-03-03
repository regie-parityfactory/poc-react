import React from "react";

import "./Register.css";

import { Form, FormGroup, Label, Input } from "reactstrap";

import XModal from "../modals/XModal";

function Register({
  isModalOpen,
  onHandleToggleModal,
  handleOnInputChange,
  isValidForm
}) {
  const modalBody = (
    <Form>
      <FormGroup>
        <Label for="accountName">Account Name</Label>
        <Input
          type="text"
          name="accountName"
          id="accountName"
          placeholder="Enter account name"
          onChange={handleOnInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={handleOnInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleOnInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="textarea"
          name="address"
          id="address"
          placeholder="Enter address"
          onChange={handleOnInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="type">Type</Label>
        <Input
          type="text"
          name="type"
          id="type"
          placeholder="Enter type"
          onChange={handleOnInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="growerHauler">Grower/Hauler</Label>
        <Input
          type="select"
          name="grower_hauler"
          onChange={handleOnInputChange}
        >
          <option>Grower</option>
          <option>Hauler</option>
        </Input>
      </FormGroup>
    </Form>
  );

  return (
    <>
      <div>
        <XModal
          isModalOpen={isModalOpen}
          modalBody={modalBody}
          onHandleToggleModal={onHandleToggleModal}
          modalSize={"md"}
          modalTitle={"Register"}
          modalId={"modalTitle"}
          buttonHappyText={"Submit"}
          buttonSadText={"Cancel"}
          isValidForm={isValidForm}
        />
      </div>
    </>
  );
}

export default Register;
