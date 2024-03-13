'use client';
import React from 'react'
import { Row, Col, Container } from "reactstrap"
import phonePay from '@/public/Phone-Pe-Scan.jpg'
import paytm from '@/public/paytm.jpg'
import googlePay from '@/public/googlePay03.jpg'
import Image from 'next/image';


const BankDetailsPage = () => {
  return (
    <div>
      <Container>
      <div className='forContainerPadding'>
        <Row className='mt-4'>
          <Col>
          <div className='bankdetailsTitle'>
            <p>All Subscriptions require KYC and RPM. Services would start as soon as KYC, RPM and Verification Formalities are done. Our executives would assist you in the process.</p>
          </div>
          <div className='bankdetailsTitle'>
            <p>As per new SEBI circular september, 2020. Please complete the agreement process before making any payment.</p>
          </div>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col md={4}>
            <div>
              <Image src={phonePay} alt='phonePay' className='paymentImg'/>
            </div>
          </Col>
          <Col md={4}>
          <div>
              <Image src={paytm} alt='phonePay' className='paymentImg'/>
            </div>
          </Col>
          <Col md={4}>
          <div>
              <Image src={googlePay} alt='phonePay' className='paymentImg'/>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
    </div>
  )
}

export default BankDetailsPage