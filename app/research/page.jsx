"use client";
import React from 'react';
import Image from 'next/image';
import researchTemplet from "../../public/researchTemplet.png"
import { Row, Col, Container } from 'reactstrap';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import breifcase from "../../public/briefcase (1).png"
import piggyBank from "../../public/piggy-bank.png"
import profitPng from "../../public/profit.png"
import ideaPng from "../../public/idea.png"
import breifCase2 from "../../public/briefcase.png"


const ResearchPage = () => {
  const tag = 'F-Reasearch'
  return (
    <div>
      <div className='researchMainContainer'>
        <Container>
          <div className='researchForPadding'>
          <div className='researchTitle'>
            <h1>Research</h1>
            <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
              <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '5px', marginLeft: '1px' }}></div>
            </div>
          </div>
          <div className='templetContainer'>
            <Image src={researchTemplet} alt='templet' className='researchTemplet' />
          </div>
          <div className='researchParas'>
            <Row>
              <Col md={6} className='coloumnsforTablet'>
                <div className='subParas'>
                  <h2>Research Focus</h2>
                  <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div>
                  <p>
                    Our recommendations are generated on the based of time and tested fundamental and technical research analysis models for our customers.</p>
                </div>
              </Col>
              <Col md={6} className='coloumnsforTablet'>
                <div className='subParas'>
                  <h2>Our Expertise</h2>
                  <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div>
                  <p>Our core areas of expertise are Equities, Commodities, Currencies, Derivatives.  Our views are purely based on fundamental and technical analysis and are independent, unbiased and balanced.</p>
                  <p>Our time to time research reports help our customers understand their investment decisions wisely.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          </div>
        </Container>
      </div>
        <Container>
          <div className='tradingPrinciplebg'>
        <Row className='tradingPrinciplesRow'>
          <h3>Trading Principles</h3>
          <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
            <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
          </div>
          <Col md={4} className='coloumnsforTablet'>
            <div className='tradingPrincipleslist'>
              <div className='pngContainer'>
                <Image src={breifcase} alt='breifcase' className='tradingPng' />
                <h6>Always invest with a margin of safety</h6>
              </div>
              <div className='pngContainer'>
                <Image src={piggyBank} alt='breifcase' className='tradingPng' />
                <h6>Use equal risk and reward in each trade</h6>
              </div>
              <div className='pngContainer'>
                <Image src={ideaPng} alt='breifcase' className='tradingPng' />
                <h6>Keep patience while investing in stock market</h6>
              </div>
            </div>
          </Col>
          <Col md={4} className='coloumnsforTablet'>
            <div className='tradingPrincipleslist'>
              <div className='pngContainer'>
                <Image src={profitPng} alt='breifcase' className='tradingPng' />
                <h6>Expect volatility and Profit and loss from it</h6>
              </div>
              <div className='pngContainer'>
                <Image src={breifCase2} alt='breifcase' className='tradingPng' />
                <h6>Strictly follow stop loss levels</h6>
              </div>
            </div>
          </Col>
          <Col md={4} className='coloumnsforTablet'>
            <div className='tradingPrincipleslist'>
              <div className='pngContainer'>
                <Image src={profitPng} alt='breifcase' className='tradingPng' />
                <h6>Know what kind of investor you are</h6>
              </div>
              <div className='pngContainer'>
                <Image src={piggyBank} alt='breifcase' className='tradingPng' />
                <h6>Strictly follow the levels provided in each signal</h6>
              </div>
            </div>
          </Col>
        </Row>
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

export default ResearchPage