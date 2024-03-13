"use client";
import React from 'react'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, Form, FormGroup, Input, Container, Button } from 'reactstrap';
import ourMissonPic from "../../public/Screenshot 2023-12-16 154014.png";
import ourVisionPic from "../../public/Screenshot 2023-12-16 154042.png";
import Image from 'next/image';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import BreadCrumbComponent from '../../components/BreadCrumb/BreadCrumb';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup";

const api_url = process.env.API_URL;

const AboutPage = () => {
  const tag = 'F-ABOUT'
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const paylaod = {
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      dematAccount: data.get('dematAccount'),
      serviceRequest: data.get('serviceRequest'),
      comment: data.get('comment')
    };

    try {
      const url = `${api_url}/addAboutForm`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paylaod),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const result = await response.json();
      if (result) {
        console.log("responseData", result);
        e.target.reset();
        setModalShow(true)
      }
      console.log("data added successfully!!");
    } catch (error) {
      console.log('Error:', error);
    };
  };
  return (
    <div>
      <div>
        <BreadCrumbComponent />
      </div>
        <Container>
          <div className='forContainerPadding'>
            <Row>
              <Col md={8} className='coloumnsforTablet'>
                <div>
                  {/* About Us Slider */}
                  <Carousel className='aboutCarousel' infiniteLoop autoPlay interval={2000} showArrows={false} showStatus={false} showIndicators={true}>
                    <div>
                      <Image src={ourMissonPic} alt='slider-1' className='sliderImages' />
                    </div>
                    <div>
                      <Image src={ourVisionPic} alt='slider-2' className='sliderImages' />
                    </div>
                  </Carousel>
                  {/*  */}
                </div>
                <div className='overviewHeading'>
                  <h5>Company overview</h5>
                  <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div>
                </div>
                <div className='aboutParagraph'>
                  <p>SKW investment adviser deals with stock market investment advisory with the help of Technical Research both in Equities and Derivatives. We have more than 15+ years of industry experience and provide advisory services to both retail and corporate clients. We use our time and tested models to generate signals and try that the investment made by our clients proliferates. Earlier the name of the company was Garuda Finance which is now changed to SKW Investment Adviser as per SEBI Compliance on March 2021.</p>
                  <p>The three magical alphabets in SKW INVESTMENT ADVISER, SKW defines as Sumit Kumar Waghmare, registered as SEBI Registered Individual Investment Adviser having SEBI Registration number INA200013099.</p>
                </div>
              </Col>
              <Col md={4} className='coloumnsforTablet'>
                <Container className='formcontainer'>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <h5>Get Started</h5>
                      <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                        <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="name">Name</Label> */}
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        required

                      />
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="phno">Phone Number</Label> */}
                      <Input
                        type="number"
                        name="phoneNumber"
                        id="phno"
                        placeholder="Enter your phone number"
                        required
                        min={0}

                      />
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="email">Email</Label> */}
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required

                      />
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="selectBox1">Select Box 1</Label> */}
                      <Input
                        type="select"
                        name="dematAccount"
                        id="selectBox1"
                        required
                      >
                        {/* Add options for the select box */}
                        <option selected disabled value=''>Are you a Demat Account holder?</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Intrested</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="selectBox2">Select Box 2</Label> */}
                      <Input
                        type="select"
                        name="serviceRequest"
                        id="selectBox2"
                        required
                      >
                        {/* Add options for the select box */}
                        <option selected disabled value="">Select A Service Request</option>
                        <option>Cash</option>
                        <option>Index</option>
                        <option>Future</option>
                        <option>MCX</option>
                        <option>NCDEX</option>
                        <option>FOREX</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      {/* <Label for="textarea">Textarea</Label> */}
                      <Input
                        type="textarea"
                        name="comment"
                        id="textarea"
                        placeholder="Comment"
                        required
                      />
                    </FormGroup>
                    <Button type="submit" className='submitButton'>
                      Submit
                    </Button>
                  </Form>
                </Container>
              </Col>
            </Row>
          </div>
        </Container>
        <div className='listContainer'>
          <Container>
            <div className='forContainerPadding'>
            <Row>
              <Col md={4} className='coloumnsforTablet'>
                <div className='missionList'>
                  <h4>Our <span style={{ fontWeight: 'bold' }} >Mission</span></h4>
                  <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div>
                  <h6>To become one of the most trusted and referred brand for investment advisory services globally by</h6>
                  <ul>
                    <li><p>Giving investors contemporary experience.</p></li>
                    <li><p>Making our customer feel valued and respected.</p></li>
                    <li><p>Giving clients customized services as per their preference.</p></li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className='coloumnsforTablet'>
                <div className='missionList'>
                  <h4>Our <span style={{ fontWeight: 'bold' }}>Vision</span></h4>
                  <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div>
                  <h6>To provide high value financial products and services for retail investors globally by</h6>
                  <ul >
                    <li><p>Providing large number of financial products to choose from.</p></li>
                    <li><p>Providing goal based financial products.</p></li>
                    <li><p>Providing products as per risk tolerance of client.</p></li>
                  </ul>
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
      <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default AboutPage