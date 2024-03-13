'use client';
import React from 'react'
import { Row, Col, Table,Container } from "reactstrap"
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterPage from '@/components/Footer/Footer';
import Disclaimer from '@/components/Disclaimer/Disclaimer';

const RefundPolicyPage = () => {
  const tag = 'F-REFUND POLICY'
  return (
    <div>
      <Container>
      <div className='forContainerPadding'>
        <Row>
          <Col>
            <div className='disclaimerTitle'>
              <h1>Refund Policy</h1>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '2rem', marginLeft: '1px' }}></div>
              </div>
              <div className='refundPolicyList'>
                <h6>The most important part of our industry is customer satisfaction.</h6>
                <h6>Investment in stock market is always subject to market risk due to real time price fluctuation of financial securities traded in the market. Therefore, SKW Investment Adviser and none of its representative is liable at any time, for any failure of performance, error, interruption, deletion, defect and delay in operation in your services.</h6>
                <h6>The recommendations provided to the customer is based on the judgement and the information available at any particular time, which might change with time.</h6>
                <h6>Therefore, neither the investment advisor nor any of its representative is responsible for any gains or losses made on the basis of recommendations provided to the customer. Customer’s discretion is always advised before executing the recommendation.</h6>
                <h6>Investment in financial securities involves risk fairly and we shall not be responsible for failure of connectivity of network and internet for any reasons.</h6>
                <h6>Also, by entering into any membership you are agreeing to all the company terms and conditions. <br />
                  For any query you can contact us at &nbsp;<a href="#">info@skwinvestmentadviser.com</a> or call us at our customer service desk +91-8550000890. <br />
                  All disputes will be subject to jurisdiction of Bangalore only.</h6>
                <h6>As per the SEBI guidelines, our clients are entitled to a refund for the unexpired service tenure in case of a premature termination of our investment advisory service agreement. Kindly note that a breakage fee amounting to the fee of one quarter & the GST amount shall remain excluded from the refund amount. The Following samples can be referred to for better clarity:</h6>
                <h6>Ex 1: The client has paid subscription amount of Rs. 59000 for the next two quarters on 1st April and does not want to continue the services. He raises a refund request on 5th April then the following computation will be applicable:</h6>
                <div>
                  <Table bordered className='moreTable border-#FFFFFF mt-4' responsive>
                    <thead className='refundTableHead'>
                      <tr>
                        <th>FEE PAID (INCLUDING GST)</th>
                        <th>GST (18%) DEDUCTION</th>
                        <th>BREAKAGE FEE DEDUCTION (1 QUARTER)</th>
                        <th>FEE FOR SERVICE UTILISED (5 DAYS)</th>
                        <th>APPLICABLE REFUND</th>
                      </tr>
                    </thead>
                    <tbody className='refundTableBody'>
                      <tr>
                        <td>Rs.59000</td>
                        <td>Rs.9000</td>
                        <td>Rs.25000</td>
                        <td>Rs.1389</td>
                        <td>Rs.23611</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <h6>Ex 2: The client has paid subscription amount of Rs. 59000 for the next two quarters on 1st April and does not want to continue the services. He raises a refund request on 5th May then the following computation will be applicable:</h6>
                <div>
                  <Table bordered className='moreTable border-#FFFFFF mt-3' responsive>
                    <thead className='refundTableHead'>
                      <tr>
                        <th>FEE PAID (INCLUDING GST)</th>
                        <th>GST (18%) DEDUCTION</th>
                        <th>BREAKAGE FEE DEDUCTION (1 QUARTER)</th>
                        <th>FEE FOR SERVICE UTILISED (5 DAYS)</th>
                        <th>APPLICABLE REFUND</th>
                      </tr>
                    </thead>
                    <tbody className='refundTableBody'>
                      <tr>
                        <td>Rs.59000</td>
                        <td>Rs.9000</td>
                        <td>Rs.25000</td>
                        <td>Rs.9722</td>
                        <td>Rs.15278</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <h6>Ex 3: The client has paid subscription amount of Rs. 59000 for the next two quarters on 1st April and does not want to continue the services. He raises a refund request on 5th July then the following computation will be applicable:</h6>
                <h6>As the unutilised subscription tenure is less than one quarter which is the breakage fee, there shall be no applicable refund after the necessary deductions of breakage fee, Utilised service fee & GST.</h6>
              </div>
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

export default RefundPolicyPage