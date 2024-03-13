"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerLogo from '../../public/light1.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Row, Col,Container } from 'reactstrap';

const FooterPage = () => {
  return (
    <div>
      <div className='mainFooter'>
      <Container>
        <div className='footer'>
                    <Row style={{ display: "flex", flexWrap: "wrap" }}>
            <Col lg={4} md={8} sm={12}>
              <Link href='#'>
                <Image src={footerLogo} alt="Logo" className='footerLogo' />
              </Link>
              <div className='addresssDetails'>
                <p>Registered Name: Sumit Kumar Waghmare</p>
                <p>Type of registration: Individual Investment Adviser</p>
                <p>SEBI Registration No: INA200013099</p>
                <p>Validity: April 23, 2019, to April 23, 2024</p>
                <p>Principal officer: Sumit Kumar Waghmare</p>
                <p>Contact Number: 8550000890</p>
                <p>Email-ID: info@skwinvestmentadviser.com</p>
                <p>Correspondence Address</p>
                <p>Classic Arena #1549/2662 Aecs Lyt A Block Near Hdfc Bank Hosur Road Near Hdfc Bank Singasandra Village Bengaluru 560068 Karnataka India</p>
                <p>BSE ASL Certificate No.: BASL1236</p>
                <p>SEBI Local Office (Bengaluru)</p>
                <p>2nd Floor, Jeevan Mangal Building, No.4, Residency Road, Bengaluru, Karnataka – 560025</p>
                <p>(SKW INVESTMENT ADVISER)</p>
              </div>
            </Col>
            <Col className='width50' lg={2} md={4} sm={6}>
              <p className='headings'>Company</p>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '10px' }}></div>
              </div>
              <div>
                <a href="/about"><p>➔ Company Overview</p></a>
                <a href="/careers"><p>➔ Career</p></a>
                <a href="/complaint"><p>➔ Complaint</p></a>
                <a href="/research"><p>➔ Our Research</p></a>
                <a href="/contactUs"><p>➔ Contact Us</p></a>
                <a href="/bankDetails"><p>➔ Bank Details</p></a>
              </div>
            </Col>
            <Col className='width50' lg={2} md={4} sm={6}>
              <p className='headings'>Product</p>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '10px' }}></div>
              </div>
              <a href="/productEquity"><p>➔ Equity Advisory</p></a>
              <a href="/productInvestment"><p>➔ Investment Advisory</p></a>
              <a href="/productOutdated"><p>➔ Out Dated</p></a>
            </Col>
            <Col className='width50' lg={2} md={4} sm={6}>
              <p className='headings'>Service</p>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '10px' }}></div>
              </div>
              <div>
                <a href="/magicMoments"><p>➔ Magic Moment</p></a>
                <a href="/weekendStar"><p>➔ Weekend Star</p></a>
                <a href="/growthGems"><p>➔ Growth Gems</p></a>
                <a href="/swingLite"><p>➔ Swing Lite</p></a>
                <a href="/stellarBlues"><p>➔ Stealler Blues</p></a>
                <a href="/optionStride"><p>➔ Option Stride</p></a>
                <a href="/breifCase"><p>➔ Breifcase</p></a>
                <a href="/finplan360"><p>➔ Fin Plan 360</p></a>
                <a href="/wealthCompass"><p>➔ Wealth Compass</p></a>
              </div>
            </Col>
            <Col className='width50' lg={2} md={4} sm={6}>
              <p className='headings'>Terms of Use</p>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '10px' }}></div>
              </div>
              <div>
                <a href="/disclaimer"><p>➔ Disclaimer</p></a>
                <a href="/termsAndconditions"><p>➔ Terms and Condition</p></a>
                <a href="/privacyPolicy"><p>➔ Privacy policy</p></a>
                <a href="/disclosure"><p>➔ Disclosure</p></a>
                <a href="/faq"><p>➔ FAQ</p></a>
                <a href="/refundPolicy"><p>➔ Refund Policy</p></a>
              </div>
              <div className='socialMedia'>
                <div><Link href={'https://www.facebook.com/'}><FacebookOutlinedIcon /></Link></div>
                <div><Link href={'https://www.instagram.com/_v_i_s_h_n_u_n_a_n_i_/'}><InstagramIcon /></Link></div>
                <div><Link href={'https://twitter.com/'}><TwitterIcon /></Link></div>
                <div><Link href={'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A20384327&keywords=skw%20investment%20adviser&origin=RICH_QUERY_SUGGESTION&position=1&searchId=eee8d686-368f-4044-a087-08efc64d3fb8&sid=Ztr&spellCorrectionEnabled=false'}><LinkedInIcon /></Link></div>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
        <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
          <div style={{ borderColor: '#E99004', borderWidth: '1px', borderRadius: '2px', width: '1150px' }}></div>
        </div>
        <div>
          <center><p style={{ padding: '40px 50px', fontSize: 'small' }}>Copyright ©2021 by SKW Investment Adviser All Rights Reserved.</p></center>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterPage;
