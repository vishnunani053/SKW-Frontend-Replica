'use client';
import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Container } from 'reactstrap';
import Image from 'next/image';
import largeCap from '@/public/large-cap-stocks-4.png'
import largeCap3 from '@/public/large-cap-stocks-3.png'
import eletrolBond from '@/public/Electoral-Bond-vs-Electoral-trust.png'
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';

const BlogsPage = () => {
  const tag = 'F-BLOGS'
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
              Our Blogs
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Container>
      <Container>
      <div className='forContainerPadding'>
        <Row>
          <Col>
            <div className='blogTitle'>
              <h1>Our Blogs</h1>
              <div style={{ alignItems: 'start', display: 'flex', justifyContent: 'start' }}>
                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '40px', }}></div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='blogCardContainer'>
          <Row>
            <Col md={5}>
              <div className='blogCardImgContainer'>
                <Image src={largeCap} alt='blgimg' className='blogImg' />
              </div>
            </Col>
            <Col md={7}>
              <div className='blogDetails'>
                <a href="#" className='forBackground'>Blog</a>
                <p>Date: December 8, 2023</p>
                <h4>All You Need to Know Before Investing in the Stock Market</h4>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginLeft: '1px' }}></div>
                </div>
                <p>7 min read  &nbsp;&nbsp;<a href="#"> 0 comment</a></p>
                <p>In the world of financial markets, swing trading has gained popularity as an active trading strategy that aims to capture short-term price movements. This blog delves into the art of swing trading, exploring its key principles, strategies, and tips for...</p>
                <a href="#">Read More</a>
              </div>
            </Col>
          </Row>
        </div>
        <div className='blogCardContainer'>
          <Row>
            <Col md={5}>
              <div className='blogCardImgContainer'>
                <Image src={largeCap3} alt='blgimg' className='blogImg' />
              </div>
            </Col>
            <Col md={7}>
              <div className='blogDetails'>
                <a href="#" className='forBackground'>Blog</a>
                <p>Date: December 8, 2023</p>
                <h4>Investing in Large Cap Stocks</h4>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginLeft: '1px' }}></div>
                </div>
                <p>7 min read  &nbsp;&nbsp;<a href="#"> 0 comment</a></p>
                <p>In the world of financial markets, swing trading has gained popularity as an active trading strategy that aims to capture short-term price movements. This blog delves into the art of swing trading, exploring its key principles, strategies, and tips for...</p>
                <a href="#">Read More</a>
              </div>
            </Col>
          </Row>
        </div>
        <div className='blogCardContainer'>
          <Row>
            <Col md={5}>
              <div className='blogCardImgContainer'>
                <Image src={eletrolBond} alt='blgimg' className='blogImg' />
              </div>
            </Col>
            <Col md={7}>
              <div className='blogDetails'>
                <a href="#" className='forBackground'>Blog</a>
                <p>Date: December 8, 2023</p>
                <h4>Electoral Bonds vs. Electoral Trusts</h4>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginLeft: '1px' }}></div>
                </div>
                <p>7 min read  &nbsp;&nbsp;<a href="#"> 0 comment</a></p>
                <p>In the world of financial markets, swing trading has gained popularity as an active trading strategy that aims to capture short-term price movements. This blog delves into the art of swing trading, exploring its key principles, strategies, and tips for...</p>
                <a href="#">Read More</a>
              </div>
            </Col>
          </Row>
        </div>
        <div className='loadMoreBtn'>
          <Button>Load More</Button>
        </div>
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

export default BlogsPage