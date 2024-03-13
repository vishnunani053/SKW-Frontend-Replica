'use client';
import React from 'react'
import { Row, Col, Table } from "reactstrap"
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterPage from '@/components/Footer/Footer';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

const ContactUsPage = () => {
    return (
        <div>
            <div className='contactContainer'>
                <Row>
                    <Col>
                        <div className='contactTitle'>
                            <h1>Contact us</h1>
                            <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                <div style={{ borderColor: '#e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '2rem', marginLeft: '1px' }}></div>
                            </div>
                            <p>Please let us know if you have a question, want to leave a comment, or would like further information about <span style={{ fontWeight: '700', color: '#444444' }}>SKW INVESTMENT ADVISER</span></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='quickCardTitle'>
                            <h2>Quick Connect</h2>
                            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ borderColor: '#30344d', borderWidth: '3px', borderRadius: '5px', width: '100px', marginBottom: '2rem', marginLeft: '1px' }}></div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                   <Col>
                   <Row>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <SupportAgentOutlinedIcon className='quickCardIcon' />
                                <h5>Customer Care</h5>
                                <p>Call Us:- +91 8550000890 | 9916018060</p>
                                <p>What&apos;s App:- +91 8550000890</p>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <AccountCircleOutlinedIcon className='quickCardIcon' />
                                <h5>Human Resource</h5>
                                <p>hr@skwinvestmentadviser.com</p>

                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <ChairOutlinedIcon className='quickCardIcon' />
                                <h5>Recruitment</h5>
                                <p>Call US:- 9916018025</p>
                            </div>
                        </Col>
                    </Row>
                   </Col>
                   <Col>
                    <Row>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <PortraitOutlinedIcon className='quickCardIcon' />
                                <h5>Complaint Officer</h5>
                                <p>Sumit Kumar Waghmare</p>
                                <p>info@skwinvestmentadviser.com</p>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <AccessAlarmsOutlinedIcon className='quickCardIcon' />
                                <h5>Timing</h5>
                                <p>Mon - Sat: 9:00am-6:30pm</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='quickCardDetails'>
                                <MapsHomeWorkOutlinedIcon className='quickCardIcon' />
                                <h5>Campus Relation</h5>
                                <p>hr@skwinvestmentadviser.com</p>
                            </div>
                        </Col>
                    </Row>
                    </Col>
                
                <div className='addressTitle'>
                    <h3>Corresponding SEBI Regional / Local office address</h3>
                    <Row>
                        <Col md={6}>
                            <div className='addressDetails'>
                                <h3>SEBI Regional Office (Chennai)</h3>
                                <h4>Securities and Exchange Board of India</h4>
                                <p>Southern Regional Office, Overseas Towers,
                                    7th Floor, 756 &ndash; L Anna Salai,
                                    Chennai &ndash; 600 002</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='addressDetails'>
                                <h3>SEBI Local Office (Bengaluru)</h3>
                                <h4>Securities and Exchange Board of India</h4>
                                <p>2nd Floor, Jeevan Mangal Building, No.4, Residency Road, Bengaluru, Karnataka &ndash; 560025</p>
                            </div>
                        </Col>
                    </Row>
                    <h3>Correspondence Address</h3>
                    <Row>
                        <Col>
                            <div className='addressDetails'>
                                <h4>info@skwinvestmentadviser.com</h4>
                                <p>Classic Areana #1549/2662 Aecs Lyt A Block Singasandra Village Bengaluru 560068 Karnataka India</p>
                                <p>Call Us:- +91 8550000890 | 9916018060 <br />
                                    What&apos;s App:- +91 8550000890</p>
                                    <p>info@skwinvestmentadviser.com</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <FormComponent />
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

export default ContactUsPage