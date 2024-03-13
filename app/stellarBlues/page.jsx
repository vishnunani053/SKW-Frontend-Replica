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

const StellarBluesPage = () => {
    const tag = 'F-STELLAR BLUES'
    return (
        <div>
            <Container>
                <div className='forContainerPadding'>
                    <div className='forCentertext'>
                        <div className='magicMomentstitle'>
                            <h1>Stellar Blues</h1>
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
                                <p>This service is for traders who do not want to invest substantial time and effort in doing intraday trading, but are very eager to generate returns from market by holding their positions overnight. We provide BTST signals in this service, BTST stands for Buy Today & Sell Tomorrow in stock market.</p>
                            </div>
                            <div>
                                <h2>What you get :</h2>
                                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                    <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                </div>
                                <div className='mt-3'>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>We will provide 13-15 recommendation in a month.</p>
                                    </div>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>Trading recommendation will be provided by Mobile application & Call Support.</p>
                                    </div>
                                    <div className='whatugetContainer'>
                                        <CheckCircleOutlinedIcon /><p>After market hours you can reach to our support department via email for any query.</p>
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
                                <Button className='pricingBtn'>₹ 5000/- On-Boarding</Button>
                                <Button className='pricingBtn'>₹20000/- 1 Month</Button>
                                <Button className='pricingBtn'>₹40000/- 2 Month</Button>
                                <Button className='pricingBtn'>₹50000/- 3 Month</Button>
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
                                    <p>BUY XYZ 740 CE AUG ABOVE 40 WITH SL OF 30 TARGET 55</p>
                                </div>
                                <div>
                                    <h3>Minimum Investment</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                        <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                    <p>₹ 100000</p>
                                </div>
                                <div>
                                    <h3>Risk Category</h3>
                                    <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                        <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                                    </div>
                                    <p>Moderately High</p>
                                </div>
                            </div>
                            <Row>
                                <Col>
                                    <RequestCallForm tag={'P-STELLAR BLUES'} />
                                </Col>
                            </Row>
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

export default StellarBluesPage