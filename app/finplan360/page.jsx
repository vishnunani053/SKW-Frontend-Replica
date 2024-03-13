"use client";
import React from 'react'
import { Row, Col, Button, Container } from "reactstrap"
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MarqueeComponent from '../../components/Marquee/MarqueeComponent'
import RequestCallForm from '../../components/RequestCallForm/RequestCallForm'
import Image from 'next/image';
import riskMeterpng from '../../public/moderate-300x148.png'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';

const FinplanPage = () => {
    const tag = 'F-FINPLAN 360'
    return (
        <div>
            <Container>
                <div className='forContainerPadding'>
                    <div>
                        <div className='forCentertext'>
                            <h1>Finplan 360</h1>
                        </div>
                        <div>
                            <MarqueeComponent />
                        </div>
                        <div >
                            <hr style={{ marginTop: '10px' }} />
                        </div>
                    </div>
                    <Row>
                        <Col md={8} className='coloumnsforTablet'>
                            <div className='magicIntro'>
                                <h2>Intoduction</h2>
                                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                    <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                </div>
                            </div>
                            <div className='mt-2 text-justify'>
                                <p>Financial Planning is at the center of everyone&apos;s life. People want to retire early and live a balanced life in coming future. You should plan your investments accordingly in order to enjoy life peacefully and luxuriously. We will make sure that you achieve your goals with our simple and straightforward advice.</p>
                            </div>
                            <div>
                                <h2>What you get :</h2>
                                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                    <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                </div>
                                <div className='mt-3'>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>We will understand your requirement over 2-3 Virtual Meeting.</p>
                                    </div>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>We will suggest you the recommendation on your portfolio in next 2-3 virtual meeting.</p>
                                    </div>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>You can reach to our support department for any query via email.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloumnsforTablet'>
                            <div className='pricingTitle'>
                                <h3>Pricing</h3>
                                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ borderColor: ' #000000', borderWidth: '3px', borderRadius: '5px', width: '100px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                </div>
                            </div>
                            <div className='PricingbtnContainer'>
                                <Button className='pricingBtn'>2.5% of AUM</Button>
                                {/* <Button className='pricingBtn'>₹20000/- 1 Month</Button>
                        <Button className='pricingBtn'>₹40000/- 2 Month</Button>
                        <Button className='pricingBtn'>₹50000/- 3 Month</Button> */}
                            </div>
                            <div className='pricingFooter'>
                                <p>This service charge is exclusive of all taxes.
                                    For more Information Call Us:+91 9916018060</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='coloumnsforTablet'>
                            <div className='sampleMainContainer'>
                                <div className='sampleContainer'>
                                    <h3>Sample Call</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                        <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                    <p>--</p>
                                </div>
                                <div>
                                    <h3>Minimum Investment</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                        <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                    <p>5000000</p>
                                </div>
                                <div>
                                    <h3>Risk Category</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                        <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                    <p>Low</p>
                                </div>
                            </div>
                            <div>
                                <RequestCallForm tag={'P-FINPLAN 360'} />
                            </div>
                        </Col>
                        <Col md={4} className='coloumnsforTablet'>
                            <div className='riskMainContainer'>
                                <div className='risktitle'>
                                    <h3>Risko Meter</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ borderColor: '  #30344d', borderWidth: '3px', borderRadius: '5px', width: '100px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                </div>
                                <div className='riskImgContainer'>
                                    <Image src={riskMeterpng} alt='riskMeter' />
                                </div>
                                <div className='riskFooter'>
                                    <p> Please complete RPM before subscribing any of our packages</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='coloumnsforTablet'>
                            <div className='marketAnalyisContainer'>
                                <div className='marketAnalysisTitle'>
                                    <h2>Market Analysis</h2>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ borderColor: '  #30344d', borderWidth: '3px', borderRadius: '5px', width: '100px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                </div>
                                <div>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className='marketSubcontainers'>
                                            <FeedOutlinedIcon className='marketIcons' />
                                            <p>Customized product as per risk profiling and investment requirement of clients</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='marketSubcontainers'>
                                            <GroupsOutlinedIcon className='marketIcons' />
                                            <p>Dedicated Research & Analysis Team</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className='marketSubcontainers'>
                                            <SupportAgentOutlinedIcon className='marketIcons' />
                                            <p>Client Support and Query resolution on a real time basis</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='marketSubcontainers'>
                                            <TimerOutlinedIcon className='marketIcons' />
                                            <p>Time and Technology based Signals</p>
                                        </div>
                                    </Col>
                                </Row>
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

export default FinplanPage