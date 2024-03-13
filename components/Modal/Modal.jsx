'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup"

const ModalComponent = ({ show, closePopup }) => {
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
        tag: "HIRE AN EXPERT",
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
          closePopup(true)
          setModalShow(true)
        }
        console.log("data added successfully!!");
      } catch (error) {
        console.log('Error:', error);
      };
    };

    return (
        <>
            <Modal show={show} onHide={closePopup} centered size='sm'>
                <Modal.Header closeButton>
                    <Modal.Title>HIRE AN EXPERT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your Name"
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="number"
                                    name="phoneNumber"
                                    id="phno"
                                    placeholder="Enter your phone number"
                                    required

                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required

                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Enter your city"
                                    required

                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="dematAccount"
                                    id="selectBox1"
                                    required

                                >
                                    <option selected disabled value=''>Are you a Demat Account holder?</option>
                                    <option className="option1">Yes</option>
                                    <option className="option2">No</option>
                                    <option className="option2">Intrested</option>
                                </Input>
                            </FormGroup>
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
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" name='tandc' required />
                                <Label check>
                                    <p style={{ fontSize: '12px', fontWeight: '500' }}>By clicking on submit you are agreeing for term & condition of SKW Investment Adviser</p>
                                </Label>
                            </FormGroup>
                            <Button type="submit" style={{ background: '#e99004', color: '#ffffff', width: '100%', borderWidth: 'none', border: 'none', marginBottom: '1rem' }}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default ModalComponent;
