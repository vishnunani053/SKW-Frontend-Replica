"use client";
import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-new.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const CustomNavbar = () => {
 
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownEnter = (dropdownId) => {
    setActiveDropdown(dropdownId);
  };
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const callButtonAlert = () => {
    confirm("https://skwinvestmentadviser.com wants to open this application.");
  };

  return (
    <Navbar expand="lg" className="navbarContainer">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src={logo} alt="Logo" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto mr-20 mt-2 mb-3 gap-4 navbarMobile">
            <div className="nav-link" id="myDIV">
              <Link href="/about" className="navLink">
                About Us
              </Link>
            </div>
            <div className="nav-link">
              <Link href="/research" className="navLink">
                Research
              </Link>
            </div>
            <div>
              <NavDropdown
                title="Product"
                id="basic-nav-dropdown-1"
               show={activeDropdown === "dropdown1"}
               onMouseEnter={()=>handleDropdownEnter('dropdown1')}
               onMouseLeave={handleDropdownLeave}
              >
                <NavDropdown.Item href="productEquity">
                  Equity Advisory
                </NavDropdown.Item>
                <NavDropdown.Item href="productInvestment">
                  Investment Advisory
                </NavDropdown.Item>
                <NavDropdown.Item href="productOutdated">
                  Outdated Products
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div>
              <div>
                <NavDropdown
                  title="Service"
                  id="basic-nav-dropdown-2"
                  show={activeDropdown === "dropdown2"}
                  onMouseEnter={() => handleDropdownEnter("dropdown2")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavDropdown.Item href="magicMoments">
                    Magic Moments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="weekendStar">
                    Weekend Star
                  </NavDropdown.Item>
                  <NavDropdown.Item href="growthGems">
                    Growth Gems
                  </NavDropdown.Item>
                  <NavDropdown.Item href="swingLite">
                    Swing Lite
                  </NavDropdown.Item>
                  <NavDropdown.Item href="stellarBlues">
                    Stellar Blues
                  </NavDropdown.Item>
                  <NavDropdown.Item href="optionStride">
                    Option Stride
                  </NavDropdown.Item>
                  <NavDropdown.Item href="breifCase">
                    Briefcase
                  </NavDropdown.Item>
                  <NavDropdown.Item href="finplan360">
                    Fin Plan 360
                  </NavDropdown.Item>
                  <NavDropdown.Item href="wealthCompass">
                    Wealth Compass
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown-2"
                show={activeDropdown === "dropdown3"}
                onMouseEnter={() => handleDropdownEnter("dropdown3")}
                onMouseLeave={handleDropdownLeave}
              >
                <NavDropdown.Item href="rpm">Rpm</NavDropdown.Item>
                <NavDropdown.Item href="investorCharter">
                  Investor Charter
                </NavDropdown.Item>
                <NavDropdown.Item href="annualCompliance">
                  Annual Compliance Audit
                </NavDropdown.Item>
                <NavDropdown.Item href="joiningProcess">
                  Joining Process SKW
                </NavDropdown.Item>
                <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="ourBlogs">Our Blogs</NavDropdown.Item>
                <NavDropdown.Item href="careers">Careers</NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="nav-link">
              <Link href="/complaint" className="navLink">
                Complaint
              </Link>
            </div>
            <div className="mobileCallbutton">
              <Button
                variant="outline-light"
                className="callButton"
                onClick={callButtonAlert}
              >
                Call Us Now
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;