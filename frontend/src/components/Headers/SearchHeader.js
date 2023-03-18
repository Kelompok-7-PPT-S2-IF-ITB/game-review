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
import { Button, Container, Row, Col, Form, FormGroup, InputGroup,InputGroupAddon, InputGroupText,Input } from "reactstrap";
import "components/Headers/styleheader.css"

const SearchHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "750px",
          backgroundImage:
            "url(" + require("../../assets/img/figma/searchpage.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-1" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              {/* <h1 className="display-2 text-white">Wanna Play a Game</h1>
              <p className="text-white mt-0 mb-5">
              Dapatkan informasi seputar game kesukaan anda hanya dengan sekali tekan

              </p> */}
        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="buttonsearchpage ">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text"/>
              </InputGroup>
            </FormGroup>
          </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SearchHeader;
