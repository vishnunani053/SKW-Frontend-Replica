"use client";
import React from 'react'
import { Row, Col,Container } from "reactstrap"
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';

const InvestorCharterPage = () => {
  const tag ='F-INVESTOR CHARTER'
  return (
    <div>
      <Container>
      <div className='forContainerPadding'>
        <Row>
          <Col>
            <div className='investorContainer'>
              <h1>Investor Charter</h1>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '40px', marginLeft: '1px' }}></div>
              </div>
              <h2>A. Vision and Mission Statements for investors</h2>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
              <ul className='investorUl'>
                <li>
                  <h3>Vision</h3>
                </li>
              </ul>
              <p>Invest with knowledge & safety.</p>
              <ul className='investorUl'>
                <li>
                  <h3>Mission</h3>
                </li>
              </ul>
              <p>Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
              <h2>B. Details of business transacted by the Investment Adviser with respect to the investors</h2>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
              <ul className='investorUl'>
                <li>
                  <p>To enter into an agreement with the client providing all details including fee details, aspect of Conflict of interest disclosure and maintaining confidentiality of information.</p>
                </li>
                <li>
                  <p>To do a proper and unbiased risk – profiling and suitability assessment of the client.</p>
                </li>
                <li>
                  <p>To obtain registration with Know Your Client Registration Agency (KRA) and Central Know Your Customer Registry (CKYC).</p>
                </li>
                <li>
                  <p>To conduct audit annually.</p>
                </li>
                <li>
                  <p>To disclose the status of complaints in its website.</p>
                </li>
                <li>
                  <p>To disclose the name, proprietor name, type of registration, registration number, validity, complete address with telephone numbers and associated SEBI regional/local Office details in its website.</p>
                </li>
                <li>
                  <p>To employ only qualified and certified employees.</p>
                </li>
                <li>
                  <p>To deal with clients only from official number.</p>
                </li>
                <li>
                  <p>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to advice has taken place.</p>
                </li>
              </ul>
              <h2>C. Details of services provided to investors (No Indicative Timelines)</h2>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
              <ul className='detailsUl'>
                <li><p> Onboarding of Clients </p>
                  <ul className='detailsUl'>
                    <li><p>Sharing of agreement copy</p></li>
                    <li><p>Completing KYC of clients</p></li>
                  </ul>
                </li>
                <li> <p>Disclosure to Clients</p>
                  <ul className='detailsUl'>
                    <li><p>To provide full disclosure about its business, affiliations, compensation in the agreement.</p></li>
                    <li><p>To not access client&apos;s accounts or holdings for offering advice.</p></li>
                    <li><p>To disclose the risk profile to the client.</p></li>
                  </ul>
                </li>
                <li><p>To provide investment advice to the client based on the risk-profiling of the clients and suitability of the client.</p></li>
              </ul>
              <h2>D. Details of grievance redressal mechanism and how to access it</h2>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
              <div className='detailsPara'>
                <p>1. In case of any grievance / complaint, an investor should approach the concerned Investment Adviser and shall ensure that the grievance is resolved within 30 days.</p>
                <p>2. If the investor&apos;s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI&apos;s &apos;SCORES&apos; portal which is a centralized web based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</p>
                <p>3. With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, &apos;G&apos; Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.</p>
              </div>
              <h2>E. Expectations from the investors (Responsibilities of investors)</h2>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
              <ul className='do-dontList'>
                <li>Do&apos;s
                  <ul className='forMobileUlInvestCharter'>
                    <li> <p>i. Always deal with SEBI registered Investment Advisers.</p></li>
                    <li><p>ii. Ensure that the Investment Adviser has a valid registration certificate.</p></li>
                    <li> <p>iii. Check for SEBI registration number.</p></li>
                    <li> <p>Please refer to the list of all SEBI registered Investment Advisers which is available on SEBI website in the following link: <a href="#" style={{wordBreak:'break-word'}}>https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13)</a></p></li>
                    <li><p>iv. Pay only advisory fees to your Investment Adviser. Make payments of advisory fees through banking channels only and maintain duly signed receipts mentioning the details of your payments.</p></li>
                    <li> <p>v. Always ask for your risk profiling before accepting investment advice. Insist that Investment Adviser provides advisory strictly on the basis of your risk profiling and take into account available investment alternatives.</p></li>
                    <li> <p>vi. Ask all relevant questions and clear your doubts with your Investment Adviser before acting on advice.</p></li>
                    <li><p>vii. Assess the risk–return profile of the investment as well as the liquidity and safety aspects before making investments.</p></li>
                    <li> <p>viii. Insist on getting the terms and conditions in writing duly signed and stamped.</p></li>
                    <li><p>Read these terms and conditions carefully particularly regarding advisory fees, advisory plans, category of recommendations etc. before dealing with any Investment Adviser</p></li>
                    <li><p>ix. Be vigilant in your transactions.</p></li>
                    <li> <p>x. Approach the appropriate authorities for redressal of your doubts / grievances.</p></li>
                    <li><p>xi. Inform SEBI about Investment Advisers offering assured or guaranteed returns.</p></li>
                  </ul>

                </li>
                <li>Don&apos;ts
                  <ul  className='forMobileUlInvestCharter'>
                    <li><p>xii. Don&apos;t fall for stock tips offered under the pretext of investment advice.</p></li>
                    <li><p>xiii. Do not provide funds for investment to the Investment Adviser.</p></li>
                    <li><p>xiv. Don&apos;t fall for the promise of indicative or exorbitant or assured returns by the Investment Advisers. Don&apos;t let greed overcome rational investment  decisions.</p></li>
                    <li><p>xv. Don&apos;t fall prey to luring advertisements or market rumors.</p></li>
                    <li><p>xvi. Avoid doing transactions only on the basis of phone calls or messages from any Investment adviser or its representatives.</p></li>
                    <li><p>xvii. Don&apos;t take decisions just because of repeated messages and calls by Investment Advisers.</p></li>
                    <li><p>xviii. Do not fall prey to limited period discount or other incentive, gifts, etc. offered by Investment advisers.</p></li>
                    <li><p>xix. Don&apos;t rush into making investments that do not match your risk taking appetite and investment goals.</p></li>
                    <li><p>xx. Do not share login credential and password of your trading and demat accounts with the Investment Adviser.</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
      <div>
        <FormComponent />
      </div>
      <Container>
      <div className='disclamiar'>
        <h1>Capital @ Risk </h1>
        <p>With investment, your capital is at risk. The value of your portfolio can go down as well as up and you may get back less than you invest or earn more higher return depend on the market. A Stock, Commodity & Currency may not be right fit for everyone. Investing/Trading is subject to market risk. Please read all the documents before investing.</p>
      </div>
      </Container>
      <div>
        <FormComponent tag={tag}/>
      </div>
      <div>
        <Disclaimer/>
      </div>
      <div>
        <FooterPage/>
      </div>
    </div>
  )
}

export default InvestorCharterPage