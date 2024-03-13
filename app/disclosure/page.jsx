'use client';
import React from 'react'
import { Row, Col,Container } from 'reactstrap';
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterPage from '@/components/Footer/Footer';
import Disclaimer from '@/components/Disclaimer/Disclaimer';

const DisclosurePage = () => {
  const tag ='F-DISCLOSURE'
  return (
    <div>
<Container>
      <div className='forContainerPadding'>
        <Row>
          <Col>
            <div className='disclaimerTitle'>
              <h1>Disclosure</h1>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '2rem', marginLeft: '1px' }}></div>
              </div>
              <ul className='disclosureList'>
                <li><p>I am a SEBI Registered Investment Adviser having registration number – INA200013099.</p></li>
                <li><p>I am not affiliated with any other intermediaries, nor do receive any brokerage or commission from any third party.</p></li>
                <li><p>No penalties/directions have been issued by the SEBI under the SEBI Act or any other regulatory body.</p></li>
                <li><p>I do not recommend any stock broker or other intermediary to a client. Nor do I receive any consideration by way of remuneration or compensation or in any other form whatsoever from stock broker or other intermediary.</p></li>
                <li><p>If client wants opinion in the specific positions made by him only, we will be able to suggest appropriate view on the securities. Such suggestion/view under any circumstances shall be considered as an opinion (not advice) from my side and we advise client to consider our opinion and not consultancy to make his/her final decision. We are not liable for any losses whatsoever client may incur in accepting this opinion.</p></li>
                <li><p>I do not have any holdings or positions in the financial products or securities which are the subject matter of advice.</p></li>
                <li><p>I do not have any association in any manner with any issuer of products/ securities, this ensures that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on of investment advisory services is not compromised.</p></li>
                <li><p>Investment in market is subject to market risk, though best attempts are made for predicting markets, but no surety of return or accuracy of any kind is guaranteed.</p></li>
                <li><p>Client is always advised to read, understand, and agree of terms & conditions & disclaimer of service.</p></li>
                <li> <p>I do not guarantee any profit/return.</p></li>
                <li> <p>I do not provide any profit /loss sharing services, guaranteed profit services, Demat services.</p></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
      <div>
        <FormComponent tag={tag}/>
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

export default DisclosurePage