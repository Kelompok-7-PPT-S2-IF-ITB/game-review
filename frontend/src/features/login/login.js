/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Nav,
    NavLink
  } from "reactstrap";
import "layouts/style-auth.css"

  const LoginGame = () => {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="card-login">
            <CardHeader className="bg-transparent pb-5">
              <div >
                <h1 className="text-signin"> Sign in</h1>
                <h1 className="text-insertlogin"> Enter your email and password to sign in</h1>
                <h1 className="text-or"> Or</h1>
                <h1 className="text-dont"> Don’t have any accounts?</h1>
                <Nav>
                  <NavLink
                  active
                  href="/auth-regis/registration">
                   <h1 className="text-register"> Register here</h1>
                   
                  </NavLink>
                </Nav>
              </div>
              <div className="btn-wrapper text-center"></div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="card-email">
                    <InputGroupAddon addonType="prepend">
                      {/* <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText> */}
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      className="text-input"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="card-password">
                    <InputGroupAddon addonType="prepend">
                      {/* <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText> */}
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      className="text-input"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  {/* <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label> */}
                </div>
                <div className="text-center">
                  <Button className="button-signin" color="#090909" type="button" href="/admin/dashboard">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  };
  
  export default LoginGame;
  