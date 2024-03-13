"use client";
import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, Button ,NavDropdown} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo-new.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from '@mui/material/Popover';

const CustomNavbar = () => {
  const [productAnchorEl, setProductAnchorEl] = useState(null);
  const [serviceAnchorE1, setServiceAnchorE1] = useState(null)
  const [moreAnchorE1, setMoreAnchorE1] = useState(null)
  // const [closeNav,setCloseNav]=useState(null)
  
  // const handleClick = ()=>{
  //   setCloseNav(null)
  // }


  //open

  const handleProductPopoverOpen = (e) => {
    setProductAnchorEl(e.currentTarget);
  };

  const handleServicePopoverOpen = (e) => {
    setServiceAnchorE1(e.currentTarget)
  }

  const handleMorePopoverOpen = (e) => {
    setMoreAnchorE1(e.currentTarget)
  }

  //close
  const handleProductPopoverClose = () => {
    setProductAnchorEl(null);
  };

  const handleServicePopoverClose = () => {
    setServiceAnchorE1(null)
  }

  const handleMorePopoverClose = () => {
    setMoreAnchorE1(null)
  }

  const productOpen = Boolean(productAnchorEl);
  const serviceOpen = Boolean(serviceAnchorE1)
  const moreOpen = Boolean(moreAnchorE1)
  // const Navclose =Boolean(closeNav)

  const productId = productOpen ? 'simple-popover' : undefined;
  const serviceId = serviceOpen ? 'simple-popover' : undefined;
  const moreId = moreOpen ? 'simple-popover' : undefined;
  // const navId = Navclose? 'simple-popover':undefined


  return (
    <Navbar expand="lg" className='navbarContainer'>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src={logo} alt="Logo" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className='ml-auto mr-20 mt-2 mb-3 gap-4 navbarMobile' >
            <div>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
              <NavDropdown.Item href='magicMoments'>Magic Moments</NavDropdown.Item>
                
            </NavDropdown>
            </div>
            <div className='nav-link' id="myDIV">
              <Link href="/about" className='navLink'>About Us</Link>
            </div>
            <div className='nav-link'>
              <Link href="/research" className='navLink'>Research</Link>
            </div>
            <div className='nav-link'>
              <div
                aria-owns={productOpen ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                aria-describedby={productId} type="button" onClick={handleProductPopoverOpen}
              >
                <Link href="#" className='navLink'>Product</Link>
              </div>
              <Popover
                id={productId}
                open={productOpen}
                anchorEl={productAnchorEl}
                onClose={handleProductPopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className='productList'>
                    <Link href='productEquity' onClick={handleProductPopoverClose}><p>Equity Advisory</p></Link>
                    <Link href='productInvestment'  onClick={handleProductPopoverClose}><p>Investment Advisory</p></Link>
                    <Link href='productOutdated'  onClick={handleProductPopoverClose}><p>Outdated Products</p></Link>
                </div>
              </Popover>
            </div>
            <div className='nav-link'>
              <div
                aria-owns={serviceOpen ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                aria-describedby={serviceId} type="button" onClick={handleServicePopoverOpen}
              >
                <Link href="#" className='navLink'>Service</Link>
              </div>
              <Popover
                id={serviceId}
                open={serviceOpen}
                anchorEl={serviceAnchorE1}
                onClose={handleServicePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className='productList'>
                
                    <Link href='magicMoments' onClick={handleServicePopoverClose}> <p>Magic Moments</p></Link>
                    <Link href='weekendStar' onClick={handleServicePopoverClose}> <p>Weekend Star</p></Link>
                    <Link href='growthGems' onClick={handleServicePopoverClose}>  <p>Growth Gems</p></Link>
                    <Link href='swingLite' onClick={handleServicePopoverClose}> <p>Swing Lite</p></Link>
                    <Link href='stellarBlues' onClick={handleServicePopoverClose}> <p>Stellar Blues </p></Link>
                    <Link href='optionStride' onClick={handleServicePopoverClose}> <p>Option Stride</p></Link>
                    <Link href='breifCase' onClick={handleServicePopoverClose}> <p>Briefcase</p></Link>
                    <Link href='finplan360' onClick={handleServicePopoverClose}> <p>Fin Plan 360</p></Link>
                    <Link href='wealthCompass' onClick={handleServicePopoverClose}> <p>Wealth Compass</p></Link>
     
                </div>
              </Popover>
            </div>
            <div className='nav-link'>
              <div
                aria-owns={moreOpen ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                aria-describedby={serviceId} type="button" onClick={handleMorePopoverOpen}
              >
                <Link href="#" className='navLink'>More</Link>
              </div>
              <Popover
                id={moreId}
                open={moreOpen}
                anchorEl={moreAnchorE1}
                onClose={handleMorePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className='productList'>
                    <Link href='rpm' onClick={handleMorePopoverClose}><p>RPM</p></Link>
                    <Link href='investorCharter' onClick={handleMorePopoverClose}><p>Investor Charter</p>  </Link>
                    <Link href='annualCompliance' onClick={handleMorePopoverClose}><p>Annual Compliance Audit</p></Link>
                    <Link href='joiningProcess' onClick={handleMorePopoverClose}><p>Joining Process SKW</p></Link>
                    <Link href='faq' onClick={handleMorePopoverClose}><p>FAQ</p></Link>
                    <Link href='ourBlogs' onClick={handleMorePopoverClose}><p>Our Blogs</p></Link>
                    <Link href='careers' onClick={handleMorePopoverClose}><p>Careers</p></Link>
                </div>
              </Popover>
            </div>
            <div className='nav-link'>
              <Link href="/complaint" className='navLink'>Complaint</Link>
            </div>
            <div className='mobileCallbutton'>
            <Button variant="outline-light" className='callButton'>
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