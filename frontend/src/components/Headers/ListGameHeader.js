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
import { Card, CardBody, CardTitle, Container, Row, Col, CardImg, Button } from "reactstrap";
import { UncontrolledCarousel} from "reactstrap";

// const items = [
//   {
//     src: require("../../assets/img/theme/angular.jpg"),
//     altText: "Slide 1",
//     caption: "",
//     header: "",
//     key: "1",
//   },
//   {
//     src: require("../../assets/img/theme/bootstrap.jpg"),
//     altText: "Slide 2",
//     caption: "",
//     header: "",
//     key: "2",
//   },
//   {
//     src: require("../../assets/img/theme/react.jpg"),
//     altText: "Slide 3",
//     caption: "",
//     header: "",
//     key: "3",
//   },
// ];
const ListGameHeader = () => {
  return (
    <>
      <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          {/* <Row>
            <Col md="8" className="mx-auto">
              <UncontrolledCarousel items={items} />
            </Col>
         </Row> */}
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                        
                        className="h4 font-weight-bold mb-2"
                      >
                        Nama Game
                      </CardTitle>
                        <CardImg
                           alt="..."
                           src={require("../../assets/img/games/example_game.png")}
                           top
                        ></CardImg>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        Rp 300 000
                      </span>{" "}
                      <span className="text-nowrap">22 Maret 2023</span>
                    </p>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap"></span>
                    </p>
                    <Button
                      outline
                      color="primary"
                      href="/admin/review-game"
                    >
                      See Reviews
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                        
                        className="h4 font-weight-bold mb-2"
                      >
                        Nama Game
                      </CardTitle>
                        <CardImg
                           alt="..."
                           src={require("../../assets/img/games/example_game.png")}
                           top
                        ></CardImg>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        Rp 300 000
                      </span>{" "}
                      <span className="text-nowrap">22 Maret 2023</span>
                    </p>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap"></span>
                    </p>
                    <Button
                      outline
                      color="primary"
                      href="/admin/review-game"
                    >
                      See Reviews
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                        
                        className="h4 font-weight-bold mb-2"
                      >
                        Nama Game
                      </CardTitle>
                        <CardImg
                           alt="..."
                           src={require("../../assets/img/games/example_game.png")}
                           top
                        ></CardImg>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        Rp 300 000
                      </span>{" "}
                      <span className="text-nowrap">22 Maret 2023</span>
                    </p>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap"></span>
                    </p>
                    <Button
                      color="primary"
                      outline
                      href="/admin/review-game"
                    >
                      See Reviews
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <CardTitle
                        
                        className="h4 font-weight-bold mb-2"
                      >
                        Nama Game
                      </CardTitle>
                        <CardImg
                           alt="..."
                           src={require("../../assets/img/games/example_game.png")}
                           top
                        ></CardImg>
                      </div>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        Rp 300 000
                      </span>{" "}
                      <span className="text-nowrap">22 Maret 2023</span>
                    </p>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-nowrap"></span>
                    </p>
                    <Button
                      color="primary"
                      outline
                      href="/admin/review-game"
                    >
                      See Reviews
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ListGameHeader;
