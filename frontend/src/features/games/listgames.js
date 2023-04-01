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
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Nav,
    NavLink
  } from "reactstrap";
  // core components
  import ListGameHeader from "components/Headers/ListGameHeader.js";
  
  const ListGame = () => {
    return (
      <>
        <ListGameHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">All Games</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Released</th>
                      <th scope="col">Reviews</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar mr-3"
                            href="/admin/review-game"
                          >
                            <img
                              className="rounded-circle"
                              alt="..."
                              src={require("../../assets/img/games/example_game.png")}
                            />
                          </a>
                          <Media>
                            <Nav>
                              <NavLink
                                active
                                href="/admin/review-game">
                                <span className="mb-0 text-sm">
                                  Nama Games
                                </span>
                              </NavLink>
                            </Nav>
                          </Media>
                        </Media>
                      </th>
                      <td>Rp 300 000</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          22 Januari 2023
                        </Badge>
                      </td>
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
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="/admin/review-game"
                            >
                              See Review
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar mr-3"
                            href="/admin/review-game"
                          >
                            <img
                              className="rounded-circle"
                              alt="..."
                              src={require("../../assets/img/games/example_game.png")}
                            />
                          </a>
                          <Media>
                            <Nav>
                              <NavLink
                                active
                                href="/admin/review-game">
                                <span className="mb-0 text-sm">
                                  Nama Games
                                </span>
                              </NavLink>
                            </Nav>
                          </Media>
                        </Media>
                      </th>
                      <td>Rp 300 000</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          22 Januari 2023
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-danger" />
                          Positive
                        </Badge>
                          <span className="mr-2">40%</span>
                          <div>
                            <Progress
                              max="100"
                              value="40"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="/admin/review-game"
                            >
                              See Review
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar mr-3"
                            href="/admin/review-game"
                          >
                            <img
                              className="rounded-circle"
                              alt="..."
                              src={require("../../assets/img/games/example_game.png")}
                            />
                          </a>
                          <Media>
                            <Nav>
                              <NavLink
                                active
                                href="/admin/review-game">
                                <span className="mb-0 text-sm">
                                  Nama Games
                                </span>
                              </NavLink>
                            </Nav>
                          </Media>
                        </Media>
                      </th>
                      <td>Rp 300 000</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          22 Januari 2023
                        </Badge>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          Positive
                        </Badge>
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-warning"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="/admin/review-game"
                            >
                              See Review
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
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
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default ListGame;
  