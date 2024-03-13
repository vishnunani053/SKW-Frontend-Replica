"use client";
import React from 'react'
import { Row, Col, Container } from 'reactstrap'
// import ReactPlayer from 'react-player'
// import dynamic from 'next/dynamic';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';


const JoiningProcessPage = () => {
  const tag = 'F-JOINING PROCESS'
  // const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
  return (
    <div>
      <div>
        <Container>
          <div className='forContainerPadding'>
            <Row className='mt-3'>
              <Col>
                <div className='joiningTitle'>
                  <h1>Process to Join SKW INVESTMENT ADVISER</h1>
                </div>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '40px', marginLeft: '1px' }}></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} className='stepsContainer'>
                <h2>Step 1</h2>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '150px', marginTop: '1rem' }}></div>
                </div>
              </Col>
              <Col md={6} className='stepsContainer'>
                <h2>RPM</h2>
              </Col>
            </Row>
          </div>
        </Container>
        <hr />
      </div>
      <div>
        <Container>
          <div className='forContainerPadding'>
            <Row>
              <Col md={6} className='stepsContainer'>
                <h2>Step 2</h2>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '150px', marginTop: '1rem' }}></div>
                </div>
              </Col>
              <Col md={6} className='stepsContainer'>
                <h2>KYC</h2>
                <p>Follow the video</p>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className='forContainerPadding'>
            <video class="elementor-video" src="https://skwinvestmentadviser.com/wp-content/uploads/2023/07/How-To-Link-Kyc-1.m4v" controls="true" controlslist="nodownload" autoPlay></video>
          </div>
        </Container>
        <hr />
      </div>
      <Container>
        <Row>
          <Col md={6} className='stepsContainer'>
            <h2>Step 3</h2>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
              <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '150px', marginBottom: '1px', marginTop: '1rem' }}></div>
            </div>
          </Col>
          <Col md={6} className='stepsContainer'>
            <h2>Service Agreement Acceptance</h2>
            <p>Follow the video</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className='forContainerPadding'>
          <video class="elementor-video" src="https://skwinvestmentadviser.com/wp-content/uploads/2022/03/sa-WIDER.mp4" controls="true" autoPlay controlslist="nodownload"></video>
        </div>
      </Container>
      <hr />
      <Container>
        <div>
          <div className='greetings'>
            <h2>THANK YOU FOR JOINING SKW INVESTMENT ADVISER</h2>
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

export default JoiningProcessPage