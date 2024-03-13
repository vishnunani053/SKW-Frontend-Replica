"use client";
import BreadCrumbComponent from '@/components/BreadCrumb/BreadCrumb'
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import FormComponent from '@/components/FormComponent/FormComponent';
import React from 'react'
import Link from 'next/link';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Container } from 'reactstrap';

const ProductEquityPage = () => {
  const tag = 'F-EQUITY ADVISORY'
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
              Product Equity
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
      <Container>
      <div className='forContainerPadding'>
            <h1>Equity Advisory</h1>
            <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
              <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
            </div>
        <div className='cardsMainContainer'>
          <Row>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Magic Moments</h3>
                <p>This service is for traders who do not want to invest substantial time and effort in doing intraday trading, but are very eager to generate returns from market by holding their positions overnight.</p>
                <a href="/magicMoments"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer' >
                <h3>Weekend Star</h3>
                <p>Investment in stock market is better than saving money in your bank account. We run simple rule based portfolio strategies to pick the strongest stocks and let them go when they lose strength.</p>
                <a href="/weekendStar"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Swing Lite</h3>
                <p>The recommendations given under this product are based solely upon pattern & Wave Analysis. We use diversification approach to minimize the risk involved in the market.</p>
                <a href="/swingLite"><Button>Read More ➜</Button></a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Option Stride</h3>
                <p>Options enable investors to use many different strategies to achieve their desired financial goals. This Option strategy package is for traders who don&apos;t want to trade stock market randomly but want to trade with brains just like a game of chess.</p>
                <a href="/optionStride"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Growth Gems</h3>
                <p>High quality stocks is always preferred by investors in their portfolio. The best of small cap companies have the potential to eventually blossom into a large successful company.</p>
                <a href="/growthGems"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Briefcase</h3>
                <p>This portfolio consultation service is designed to provide a birds eye view of the client&apos;s currently invested portfolio. It refers to a professional financial service that assists individuals or institutions in managing their investment portfolios.</p>
                <a href="/breifCase"><Button>Read More ➜</Button></a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Stellar Blues</h3>
                <p>Large cap stocks are also known as Blue chip stocks which have acquired this coveted status after many years of consistent growth. They also have a first mover advantage which is difficult for the smaller companies of the same sector to enter or breach.</p>
                <a href="/stellarBlues"><Button>Read More ➜</Button></a>
              </div>
            </Col>
            <Col md={4} className='coloums'>
              <div className='cardsContainer'>
                <h3>Magic Combo</h3>
                <p>Diversification in portfolio is always advisable for dilution of risk associated with different investment avenues. This product is designed for clients who have substantial risk taking capability and want to diversify their portfolio into both short term and long term trading</p>
                <a href="/magicCombo"><Button>Read More ➜</Button></a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      </Container>
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

export default ProductEquityPage