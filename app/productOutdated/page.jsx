"use client";
import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import alphapng from "../../public/alpha.png"
import betapng from "../../public/beta.png"
import deltapng from "../../public/delta.png"
import gamapng from "../../public/gama.png"
import omegapng from "../../public/omega.png"
import thetapng from "../../public/theta.png"
import Image from 'next/image';
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterPage from '@/components/Footer/Footer';



const ProductOutdatedPage = () => {
    const tag = 'F-OUT DATED PRODUCTS'
    return (
        <div>
            <Container>
                <div className='aboutBreadCrumb'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <a href="/">
                                Home
                            </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            OUTDATED
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </Container>
            <Container>
            <div className='forContainerPadding'>
                <div className='outdateTitle'>
                    <Row>
                        <Col md={6}>
                            <h1>OUTDATED</h1>
                            <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='cardsMainContainer'>
                    <Row>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={alphapng} alt="png" className='outdatedPngs' />
                                    <h3>Alpha Investment</h3>
                                    <p>Investment is always made to beat the inflation factors present in the market and grow the value of investment consistently.  </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer' >
                                    <Image src={betapng} alt="png" className='outdatedPngs' />
                                    <h3>Beta Cash</h3>
                                    <p>Beta products are designed for the traders who are having medium capital and are willing to take some risk in the market.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={deltapng} alt="png" className='outdatedPngs' />
                                    <h3>Delta MCX</h3>
                                    <p>Delta products are designed for the traders who are having high networth and are willing to take comparatively higher risk in the market.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={gamapng} alt="png" className='outdatedPngs' />
                                    <h3>Gama Equity F&O</h3>
                                    <p>Gama products are designed for the traders who are having high capital and are willing to take higher risk in the market.</p>

                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={omegapng} alt="png" className='outdatedPngs' />
                                    <h3>Omega Combo</h3>
                                    <p>This Package is designed for the traders who want to take high risk with good investment and want to trade in options.</p>

                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={thetapng} alt="png" className='outdatedPngs' />
                                    <h3>Theta Index F&O</h3>
                                    <p>Theta products are designed for the traders who are having high capital and are willing to take higher risk in the market.</p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={thetapng} alt="png" className='outdatedPngs' />
                                    <h3>Value Stocks</h3>
                                    <p>Value stocks are those equity stocks which have the potential to give a return of more than 100% of its cost price</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='coloums'>
                            <div className='cardsubContainer'>
                                <div className='cardTitle'>
                                    <div >
                                    </div>
                                    <div style={{ background: 'orange', }}>
                                        <p>
                                            outdated
                                        </p>
                                    </div>
                                </div>
                                <div className='outdatedCardsContainer'>
                                    <Image src={thetapng} alt="png" className='outdatedPngs' />
                                    <h3>Zeta Reverse</h3>
                                    <p>In this product we will use a reversal strategy to generate recommendations.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
            <div>
                <FormComponent tag={tag} />
            </div>
            <div>
                <FooterPage />
            </div>
        </div>
    )
}

export default ProductOutdatedPage