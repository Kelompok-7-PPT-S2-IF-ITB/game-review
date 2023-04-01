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

const AboutUsHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "750px",
          backgroundImage:
            "url(" + require("../../assets/img/figma/about-us/aboutus.png") + ")",
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
              <h1 className="display-2 text-white">ABOUT US</h1>
              <p className="text-white mt-0 mb-5">
                Hello There,
                
                Kami adalah sebuah platform yang memberikan ulasan beragam game yang disediakan 
                oleh STEAM dengan akurasi yang tinggi. Kami bertujuan untuk membantu kalian para 
                gamers untuk melakukan pertimbangan dalam pembelian game. 

                Terus gunakan layanan kami dan nantikan pengembangan fitur kami lainnya!

              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUsHeader;
