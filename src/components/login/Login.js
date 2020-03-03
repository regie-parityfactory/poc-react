import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

import { Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import "./Login.css";

function Login(props) {
  // Initialize the states
  const [emailInput, setEmailInput] = useState("");
  const [passWordInput, setPassWordInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Icon spinner

  // Post call to API using Axios
  const handleLoginClick = () => {
    setLoading(true);
    axios
      .post("https://poc-hgo-nodebackend.herokuapp.com/parity/hgo/api/login", {
        email: emailInput,
        password: passWordInput
      })
      .then(response => {
        setLoading(false);
        props.history.push(`/growerhaulerdetail`, {
          majestic: response.data
        });
      })
      .catch(error => {
        alert(`Invalid Credentials - ${error.message}`);
      });
  };

  return (
    <>
      <div id="cardElemLogin" className="card-centered">
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              {loading && (
                <div>
                  <p>Please wait...</p>
                </div>
              )}
            </Col>
          </Row>
          <Row xs="3">
            <Col></Col>
            <Col>
              <div id="loginBackdrop">
                <Card id="cardLogin">
                  <CardBody>
                    <div className="loginTitle">
                      <h4>Member Login</h4>
                    </div>
                    <Form>
                      <FormGroup>
                        <Input
                          type="email"
                          placeholder="📩  Email"
                          className="loginMargins"
                          onChange={e => setEmailInput(e.target.value)}
                        />
                        <Input
                          type="password"
                          placeholder="🔑  Password"
                          className="loginMargins"
                          onChange={e => setPassWordInput(e.target.value)}
                        />
                        <Button
                          color="success"
                          block
                          className="loginMargins p-2"
                          onClick={handleLoginClick}
                        >
                          Login
                        </Button>
                      </FormGroup>
                    </Form>
                    <div className="forgotPassword loginTitle p-1">
                      <p className="mt-3">Forgot Password?</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withRouter(Login);
