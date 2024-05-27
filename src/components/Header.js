import React, { Fragment, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className="header-header-two">
        {/* <!-- header- solaric two --> */}

        {/* <!-- header- solaric two end --> */}
        {/* <!-- header man start --> */}
        <div className="header-main-h2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-haeder-wrapper-h2">
                  <a href="/" className="logo-area">
                    <img src="img/logo.png" alt="logo" />
                  </a>

                  <Button onClick={handleShow} className="d-lg-none navbtn">
                    <IoMenu />
                  </Button>

                  <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    backdrop="true"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>MENU</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <div className="header-nav main-nav-one">
                        <ul>
                          <li className="">
                            <a className="nav-link" href="/">
                              Home
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="/projects">
                              Projects
                            </a>
                          </li>
                          <li className="has-dropdown">
                            <span className="nav-link">
                              <a href="/">Solar</a>
                              &nbsp;
                              <span>
                                <FaAngleDown />
                              </span>
                            </span>
                            <ul className="submenu">
                              <li>
                                <a href="/">Subsidy Scheme</a>
                              </li>
                              <li>
                                <a href="/commercial">Commercial</a>
                              </li>
                              <li>
                                <a href="/">Systems</a>
                              </li>
                              <li>
                                <a href="/">Consultancy</a>
                              </li>
                              <li>
                                <a href="/">Solutions</a>
                              </li>
                              <li>
                                <a href="/">SolarCare</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <span className="nav-link">
                              <a className="" href="/">
                                Knowledge Center
                              </a>
                              &nbsp;
                              <span>
                                <FaAngleDown />
                              </span>
                            </span>
                            <ul className="submenu">
                              <li>
                                <a href="/solarCalculator">Solar Calculator</a>
                              </li>
                              <li>
                                <a href="/">Why Solar?</a>
                              </li>
                              <li>
                                <a href="/">How Solar Works?</a>
                              </li>
                              <li>
                                <a href="/Blogs">Blogs</a>
                              </li>
                              <li>
                                <a href="/">Solar Monitoring</a>
                              </li>
                              <li>
                                <a href="/faq">FAQ</a>
                              </li>
                              <li>
                                <a href="/LatestNewsAndEvents">Latest</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="nav-link" href="/partnerwithus">
                              Partner with Us
                            </a>
                          </li>
                          <li className="has-dropdown ">
                            <span className="nav-link">
                              <a href="/about">About Us</a>
                              &nbsp;
                              <span>
                                <FaAngleDown />
                              </span>
                            </span>
                            <ul className="submenu">
                              <li>
                                <a href="/">Vision</a>
                              </li>
                              <li>
                                <a href="/">Our Journey</a>
                              </li>
                              <li>
                                <a href="/">Partners</a>
                              </li>
                              <li>
                                <a href="/awadrsandcertificate">
                                  Awards and certifications
                                </a>
                              </li>
                              <li>
                                <a href="/">Customer Referral Policy</a>
                              </li>
                              <li>
                                <a href="/testimonial">Customer Testimonials</a>
                              </li>
                              <li>
                                <a href="/">Media Coverage</a>
                              </li>
                              <li className="about-li-res">
                                <a href="/">Privacy Policy</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                  {/* <!-- navigation area start --> */}
                  <div className="header-nav main-nav-one">
                    <nav>
                      <ul>
                        <li className="">
                          <a className="nav-link" href="/">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/projects">
                            Projects
                          </a>
                        </li>

                        <li className="has-dropdown">
                          <a className="nav-link" href="/">
                            Solar <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/">Subsidy Scheme</a>
                            </li>
                            <li>
                              <a href="/commercial">Commercial</a>
                            </li>
                            <li>
                              <a href="/">Systems</a>
                            </li>
                            <li>
                              <a href="/">Consultancy</a>
                            </li>
                            <li>
                              <a href="/">Solutions</a>
                            </li>
                            <li>
                              <a href="/">SolarCare</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a className="nav-link" href="/">
                            Knowledge Center <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/solarCalculator">Solar Calculator</a>
                            </li>
                            <li>
                              <a href="/">Why Solar?</a>
                            </li>
                            <li>
                              <a href="/">How Solar Works?</a>
                            </li>
                            <li>
                              <a href="/Blogs">Blogs</a>
                            </li>
                            <li>
                              <a href="/">Solar Monitoring</a>
                            </li>
                            <li>
                              <a href="/faq">FAQ</a>
                            </li>
                            <li>
                              <a href="/LatestNewsAndEvents">Latest</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="nav-link" href="/partnerwithus">
                            Partner with Us
                          </a>
                        </li>
                        <li className="has-dropdown">
                          <a className="nav-link" href="/about">
                            About Us <FaAngleDown />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/">Vision</a>
                            </li>
                            <li>
                              <a href="/">Our Journey</a>
                            </li>
                            <li>
                              <a href="/">Partners</a>
                            </li>
                            <li>
                              <a href="/awadrsandcertificate">
                                Awards and certifications
                              </a>
                            </li>
                            <li>
                              <a href="/">Customer Referral Policy</a>
                            </li>
                            <li>
                              <a href="/testimonial">Customer Testimonials</a>
                            </li>
                            <li>
                              <a href="/">Media Coverage</a>
                            </li>
                            <li>
                              <a href="/">Privacy Policy</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- navigation area end --> */}
                  <div className="actions-area">
                    {/* <!-- <div className="search-btn" id="search">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.75 14.7188C16.0625 15.0312 16.0625 15.5 15.75 15.7812C15.625 15.9375 15.4375 16 15.25 16C15.0312 16 14.8438 15.9375 14.6875 15.7812L10.5 11.5938C9.375 12.5 7.96875 13 6.46875 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.875 0 6.46875 0C10.0312 0 12.9688 2.9375 12.9688 6.5C12.9688 8.03125 12.4688 9.4375 11.5625 10.5312L15.75 14.7188ZM1.5 6.5C1.5 9.28125 3.71875 11.5 6.5 11.5C9.25 11.5 11.5 9.28125 11.5 6.5C11.5 3.75 9.25 1.5 6.5 1.5C3.71875 1.5 1.5 3.75 1.5 6.5Z"
                                            fill="#f69322" />
                                    </svg>
                                </div> --> */}

                    <a href="/" className="rts-btn btn-primary">
                      Reach us : (+91) 8123410101
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header man end --> */}
      </div>
    </Fragment>
  );
}

export default Header;