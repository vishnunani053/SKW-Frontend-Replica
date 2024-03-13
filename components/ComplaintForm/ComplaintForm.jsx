import React from 'react'
import { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Container, Label, Button, } from 'reactstrap';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup"


const api_url=process.env.API_URL

const ComplaintForm = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const paylaod = {
            name: data.get('name'),
            email: data.get('email'),
            phoneNumber: data.get('phoneNumber'),
            complaintRegarding: data.get('complaintRegarding'),
            executiveName: data.get('executiveName')

        };

        try {
            const url = `${api_url}/addComplaint`;
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
            <Container>
                <div className='forContainerPadding'>
               <div className='complaintBox'>
            <div className='complaintFormTitle'>
                <h1>We are here to assist you!</h1>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '15px', marginLeft: '1px' }}></div>
                </div>
                <p>Please complete the form below for your complaints.</p>
            </div>
            <div className='mt-4'>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Complainant&apos;s Name:
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="name"
                                    placeholder="Enter Complainant&apos;s Name:"
                                    type="text"
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter Email"
                                    type="email"
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Phone Number
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="phoneNumber"
                            placeholder="Enter Mobile Number"
                            type='number'
                            required
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>The complaint is regarding:</Label>
                                <Input
                                    id="exampleText"
                                    name="complaintRegarding"
                                    type="textarea"
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Name of the executive/service department against which/whom the complaint is filed:</Label>
                                <Input
                                    type='text'
                                    id='text'
                                    name='executiveName'
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Button style={{ width: '100%', background: '#3CB371', color: '#fff', borderWidth: '0' }}>SUBMIT</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
            <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            </div>
            </Container>
        </div>
    )
}

export default ComplaintForm