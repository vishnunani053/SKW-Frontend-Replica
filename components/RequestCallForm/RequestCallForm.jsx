"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row ,Container} from 'reactstrap';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup"

const RequestCallForm = ({ tag }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const paylaod = {
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      city: data.get('city'),
      language: data.get('language'),
      dematAccount: data.get('dematAccount'),
      tandc: true,
      tag: tag,
    };

    try {
      const url = 'http://localhost:4000/addCallback';
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
    <div className='requestcallMainContainer'>
      <Container>
      <div className='requestcallTitle'>
        <h1>Request A Call Back</h1>
      </div>
      <div>
        <div className='requestFormContainer'>
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
                <button type='submit' style={{ background: '#ffffff', width: '100%', padding: '8px' }}>CALL ME</button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  )
}

export default RequestCallForm