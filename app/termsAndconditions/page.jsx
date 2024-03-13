'use client';
import React from 'react'
import { Row, Col,Container } from 'reactstrap';
import FormComponent from '@/components/FormComponent/FormComponent';
import FooterPage from '@/components/Footer/Footer';
import Disclaimer from '@/components/Disclaimer/Disclaimer';

const TermsandConditionsPage = () => {
  const tag ='F-TERMS AND CONDITIONS'
  return (
    <div>
      <Container>
      <div className='forContainerPadding'>
        <Row>
          <Col>
            <div className='disclaimerTitle'>
              <h1>Term&apos;s and Condition</h1>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '2rem', marginLeft: '1px' }}></div>
              </div>
              <p>This Website is designed, developed and maintained by SKWINVESTMENTADVISER, If you continue to browse and use this website you are agreeing to comply with and be bound by all the terms and conditions of use, which together with our privacy policy govern SKWINVESTMENTADVISER relationship with you in relation to this website. We may change these terms and conditions at any time. Your continued use of SKWINVESTMENTADVISER means that you accept any new or modified terms and conditions that we come up with in future. Please re-visit the website www.skwinvestmentadviser.com over time to time to see our update terms and conditions.</p>
              <p>The use of this website is subject to following terms and conditions:</p>
              <p>• By registering on our website skwinvestmentadviser.com you certify that all information you provide, now or in the future, is accurate. SKWINVESTMENRADVISER.com reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons (a) immediately by SKWINVESTMENRADVISER.com for any unauthorized access or use by you (b) immediately by SKWINVESTMENRADVISER.com if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement.<br />
                I agree to get periodic SMS alerts.<br />
                I agree to get periodic newsletters.</p>
              <p>• By filling out the &apos;Hire and expert&apos; and the &apos;Free Trial Form&apos; on this website, you agree to provide us your valid mobile number and other details. Also by providing your mobile number, you provide us the consent to call you on the number provided by you and send SMS on your mobile number. You provide your consent for us to use your mobile number even if it is registered on the National &apos;Do Not Disturb&apos; registry.</p>
              <p>• skwinvestmentadviser.com, hereby grants you a limited, non-exclusive, non-assignable and non-transferable
                license to access skwinvestmentadviser.com provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this USER AGREEMENT.</p>
              <p>• skwinvestmentadviser.com as well as the design and information contained in this site is valuable and exclusive.
                property of skwinvestmentadviser.com, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity. All information on website is the proprietary and confidential property of skwinvestmentadviser.com and cannot be repeated for any reason outside skwinvestmentadviser.com. You agree not to repeat or rebroadcast in any way any of the recommendations made on skwinvestmentadviser.com for any reason whatsoever. You agree that if you do repeat or re-post any of our recommendations by any mean, you will be liable for actual and punitive damages as determined by skwinvestmentadviser.com and additional damages to be determined by a Indian court of Law.</p>
              <p>• Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
              <p>• Neither skwinvestmentadviser.com com (including its and their directors, employees, affiliates, agents, representatives or subcontractors) shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. skwinvestmentadviser.com shall have no responsibility to provide you access to SKWINVESTMENTADVISER while interruption of skwinvestmentadviser.com is due to any such cause shall continue.</p>
              <p>• You may not create a link to this website from another website or document without SKWINVESTMENTADVISER prior written consent. Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority. Unauthorized attempts to upload information, change or delete information on this website are strictly prohibited and punishable under Indian IT Act.</p>
              <p>• By ordering Services you are agreeing to these Terms & Conditions and Disclaimer.</p>
              <p>• All sales are final. Because SKWINVESTMENTADVISER offers a free evaluation to ensure that our products and services will meet your needs without the need to purchase, there will be ABSOLUTELY NO REFUNDS and CANCELLATIONS. Before deciding to subscribe to our services, please make sure to take our free trial, the evaluation version that we provide. We do not offer refunds on subscriptions that have already been taken. We so believe in our services and support and even give a free trial that, without any exception. We have a NO REFUND POLICY. For this reason, we strongly recommend that before payment, our visitors:</p>
              <p>1. Read all information about our products, services and support given to our clients.</p>
              <p>2. Evaluate the quality of our services by taking our free trial.</p>
              <p>3. Read all About Us and our technical Team.</p>
              <p>4. Read the Help and Frequently Asked Questions (FAQ) sections.</p>
              <p>5. Read our Terms of Use.</p>
              <p>6. Read our Privacy Policy.</p>
              <p>7. Do not allow children or other unauthorized family members or friends to access your credit cards or your account at the payment site to ensure that no one pays for a Membership without your permission. By making a payment for Membership to our site, you acknowledge that you have read and agree to the above No Refund and no cancellation Policy.</p>
              <p>• All disputes, differences and questions of any nature which at any time arise between the parties to this agreement out of the construction of or concerning anything contained in or arising out of this agreement or as to the rights, duties or liabilities under it or the parties to it shall be referred to the sole Arbitrator under the Arbitration and conciliation Act, 1996. The sole Arbitrator shall be appointed by the Managing Director of SKWINVESTMENTADVISER. The Arbitration Proceedings shall be held at Bangalore (Karnataka) India. The Place of Arbitration will be at Bangalore (Karnataka) India. The laws prevailing in India Shall alone apply to the Arbitration Proceedings between the parties.</p>

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

export default TermsandConditionsPage