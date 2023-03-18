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

import "layouts/style-auth-verifemail.css"

const VerificationEmail = () => {
  return (
    <>
      <Col lg="6" md="8">
      <div className="button-verifemail">
                <Button className="mt-4" color="primary" type="button" href="./verification-success">
                  Click to verivy
                </Button>
              </div>
      </Col>
    </>
  );
};

export default VerificationEmail;
