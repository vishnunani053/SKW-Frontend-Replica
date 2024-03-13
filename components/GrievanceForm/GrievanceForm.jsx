import React from 'react'
import { Row, Col, Form, FormGroup, Input, Container, Label, Button, } from 'reactstrap';

// const api_url=process.env.API_URL;

const GrievanceForm = () => {
    return (
        <div>
            <Container>
                <div className='forShadow'>
            <div className='complaintFormTitle'>
                <h1>Grievance Redressal Form</h1>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '15px', marginLeft: '1px' }}></div>
              </div>
                <p>Please complete the form below for your complaints.</p>
            </div>
            <div className='mt-4'>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Complainant&apos;s Name:
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="name"
                                    // placeholder="Enter Complainant&apos;s Name:"
                                    type="text"
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
                                // placeholder="Enter Email"
                                    type="email"
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
                            name="number"
                            // placeholder="Enter Mobile Number"
                            type='number'
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>The complaint is regarding:</Label>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
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
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <Button style={{width:'100%',background:'#3CB371',color:'#fff' ,borderWidth:'0'}}>SUBMIT</Button>
                    </FormGroup>
                    </Col>
                </Row>
                </Form>
            </div>
            </div>
            </Container>
        </div>
    )
}

export default GrievanceForm