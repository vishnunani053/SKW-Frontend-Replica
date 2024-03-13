"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Form, FormGroup, Label, Input, Button, Col, Row,Container } from 'reactstrap';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup"
import dotenv from "dotenv";

dotenv.config();

const api_url=process.env.API_URL;

const FormComponent = ({ tag }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const paylaod = {
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      city: data.get('city'),
      language: data.get('language'),
      dematAccount: data.get('dematAccount'),
      tandc: true,
      tag: tag,
    }
    try {
      const url = `${api_url}/addCallback`;
      console.log(url)
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
  }

  return (
    <div>
      <div className='needHelpContainer'>
        <Container>
        <div className='needHelpHeader'>
          <h1>Need Help ? Get a call back from our Market Expert</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ borderColor: 'white', borderWidth: '1px', borderRadius: '5px', width: '1100px' }}></div>
        </div>
        <div className='formMainContainer'>
          <Row className='align-items-center'>
            <Col md={6} lg={6} sm={6} >
              <div className='formContainer'>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="exampleEmail"
                          name="name"
                          placeholder="Your Name"
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="examplePassword"
                          name="phoneNumber"
                          placeholder="Your Number"
                          type="number"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="exampleAddress"
                          name="email"
                          placeholder="Email"
                          type='email'
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="exampleAddress2"
                          name="city"
                          placeholder="City"
                          type='text'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="exampleSelect"
                          name="language"
                          type="select"
                          required

                        >
                          <option selected disabled value=""> --Select Language-- </option>
                          <option className='options'>Hindi</option>
                          <option className='options'>kannada</option>
                          <option className='options'>Tamil</option>
                          <option className='options'>Telugu</option>
                          <option className='options'>Gujarati</option>
                          <option className='options'>English</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="exampleSelect"
                          name="dematAccount"
                          type="select"
                          required
                        >
                          <option selected disabled value=" " className='options'> --Demat -- </option>
                          <option className='options'>Yes</option>
                          <option className='options'>No</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <button type='submit' style={{ background: '#E99004', color: 'white', width: '100%', padding: '8px' }}>JOIN US</button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={6} lg={6} sm={6}>
              <div className='sliderContainer'>
                <Carousel infiniteLoop autoPlay interval={2000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                  <div className='testimonialContent'>
                    <h3>ARUN</h3>
                    <p>
                      Dear sir /Madam, Your call are very satisfied, give good response correct market analysis, we satisfied for you services Thankyou</p>
                  </div>
                  <div className='testimonialContent'>
                    <h3>ANANDKUMAR</h3>
                    <p>
                      It is a good experience with the support from the SKW. I have been guided in trading for a month of period. Calls provided to me as my convenience as per my capital in my de mat. On the very first conversation with SKW team if i get clear explanation about the plans and procedures i might be prepared for maintaining good capital and to make payment for skw plan without any delay. Now i would like it continue for long term and iam working to build good capital as well as sort the issue in future payment.</p>
                  </div>
                  <div className='testimonialContent'>
                    <h3>Seyon Kiriyadoss</h3>
                    <p>I am writing this email to give you a feedback about your service.I should admit that your calls are excellent. So for I am on the profit side.The communication from Ms. Pavithra is professional, prompt and clear. She makes sure that I entered the right option position and mostly waits in the line until i complete the trade. I would definitely refer your service to anybody who is looking for trading tips. However, I have recently signed a contract to work from home which takes most of my day time. Let me see how it goes from here.</p>
                  </div>
                  <div className='testimonialContent'>
                    <h3>DINESH RAMALINGAM</h3>
                    <p>SKW service good, SKW the service provided is good and if we ask for any help, they immediately ask us what we need and complete it</p>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </div>
      <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default FormComponent