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
  Col
} from "reactstrap";

import "layouts/style-regis.css"
import swal from 'sweetalert';

const removeData = ()=>{
  swal({
    title: "Verifikasi?",
    text: "Verivy your email address and complete your registration",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Verification Success", {
        icon: "success", 
      })
      .then(function() {
        window.location = "/admin/dashboard";
    });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
  return;
}

const Registration = () => {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="card-regis">                            
          <CardBody className="px-lg-5 py-lg-5">
            <div>            
              <h1 className="text-login">Login here</h1>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="first-name">
                  <Input placeholder="First Name" type="text" />
                </InputGroup>
              </FormGroup>
              
              <FormGroup>
                <InputGroup className="last-name">
                  <Input
                    placeholder="Last Name"
                    type="text"                  
                  />
                </InputGroup>
              </FormGroup>
              
              <FormGroup>
                <InputGroup className="input-username">           
                  <Input
                    placeholder="Enter your username"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-email">           
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
                            
              <FormGroup>
                <InputGroup className="input-password">           
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="confirm-password">           
                  <Input
                    placeholder="Confirm your password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="button-create" type="button"
                onClick={() => {
                  removeData()
                 }}
                >
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Registration;
