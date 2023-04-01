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
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  CardImg,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardFooter,
  Badge
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import ReviewGameHeader from "components/Headers/ReviewGameHeader.js";

const ReviewGame = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <ReviewGameHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-8 mb-xl-0" xl="7">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                  <CardImg
                           alt="..."
                           src={require("../../assets/img/games/example_game.png")}
                           top
                  ></CardImg>
                    <p></p>
                    <h2 className="text-white mb-0">Nama Games</h2>
                    <p className="text-white mb-0"> Deskripsi Games</p>
                    <p className="text-white mb-0"> </p>
                    <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="secondary" className="badge-dot mr-4">
                          <i className="bg-secondary" />
                          Price Rp 200 0000
                        </Badge>
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="secondary" className="badge-dot mr-4">
                          <i className="bg-secondary" />
                          Released Date 22 Maret 2023
                        </Badge>
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="secondary" className="badge-dot mr-4">
                          <i className="bg-secondary" />
                          Developer Valve
                        </Badge>
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="secondary" className="badge-dot mr-4">
                          <i className="bg-secondary" />
                          Publisher Valve
                        </Badge>
                        </div>
                      </td>
                  </tr>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
          <Col xl="5">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">Review Game</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                <Pie
                    data={chartExample2.data}
                    options={chartExample2.options}
                 className="chart-canvas"
                 id="chart-pie"
               />
                </div>
              

                <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">Page name</th> */}
                    {/* <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Positive
                        </Badge>
                          <span className="mr-2">90%</span>
                          <div>
                            <Progress
                              max="100"
                              value="90"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Negative
                        </Badge>
                          <span className="mr-2">30%</span>
                          <div>
                            <Progress
                              max="100"
                              value="30"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                  </tr>
                  <tr>
                    <td>
                        <div className="d-flex align-items-center">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-success" />
                          All Reviews 7.888.000
                        </Badge>
                        </div>
                      </td>
                  </tr>
                  </tbody>
                  </Table>


              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Buat Review Baru</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">Page name</th> */}
                    {/* <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th> */}
                  </tr>
                </thead>
                <tbody>
                <FormGroup>
                          <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            rows="4"
                            defaultValue="Post your review"
                            type="textarea"
                          />
                </FormGroup>
                  <div className="col text-left">
                    <Button
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Post Review
                    </Button>
                  </div>
                  <thead className="thead-light">
                  <tr>
                    <th scope="col"></th>
                    {/* <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th> */}
                  </tr>
                </thead>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="7">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Post</h3>
                    <h5 className="mb-2 text-muted">7.888.000 Reviews</h5>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">Page name</th> */}
                    {/* <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <tr>
                    <th scope="row">Review Game</th>
                    {/* <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td> */}
                  </tr>
                  <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReviewGame;
