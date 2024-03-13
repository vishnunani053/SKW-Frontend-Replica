"use client";
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import FormComponent from '@/components/FormComponent/FormComponent';
import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Container } from 'reactstrap';


const ProductInvestmentPage = () => {
  const tag = 'F-INVESTMENT ADVISORY'
  return (
    <div>
      <Container>
        <div className='aboutBreadCrumb'>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              Product Investment
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
      <div>
        <Container>
        <div className='forContainerPadding'>
          <h1>Investment Advisory</h1>
          <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
            <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
          </div>
          <Row>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Wealth Compass</h3>
                <p>Get your portfolio on the right track or clear your doubts regarding your finances with our one-time consultancy service. We will align your investment portfolio with your goals so that there is maximum compounding.</p>
                <a href="/wealthCompass"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Finplan 360</h3>
                <p>Financial Planning is at the center of everyone&apos;s life. People want to retire early and live a balanced life in coming future. You should plan your investments accordingly in order to enjoy life peacefully and luxuriously.</p>
                <a href="/finplan360"><Button>Read More ➜</Button></a>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </div>
      <div>
        <FormComponent tag={tag} />
      </div>
      <div>
        <Disclaimer />
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  )
}

export default ProductInvestmentPage