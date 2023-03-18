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
import { Button, Container, Row, Col } from "reactstrap";
import "components/Headers/styleheader.css"

const DashboardHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-1 d-flex align-items-center"
        style={{
          minHeight: "750px",
          backgroundImage:
            "url(" + require("../../assets/img/figma/landingpage.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-1" />
        {/* Header container */}
        <Container className="d-flex align-items-right" fluid>
          <Row>
            <Col xl="12" lg="10" md="20">
              {/* <h1 className="display-2 text-white">Wanna Play a Game</h1>
              <p className="text-white mt-1 mb-5">
              Dapatkan informasi seputar game kesukaan anda hanya dengan sekali tekan

              </p> */}
              <Button className="button-search"
                      color="primary"
                      href="./search-game"
                      size="lg"
                    >
                      Search
                    </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardHeader;
