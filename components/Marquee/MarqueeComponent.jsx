'use client';
import React from 'react'
import Marquee from "react-fast-marquee";
import { Container } from "reactstrap"



const MarqueeComponent = () => {
  return (
    <div>
      <Marquee speed={80} autoFill={false} loop={false}>
        <div className='marqueeData'>
          <p>Investment & trading in securities market is always subjected to market risks, past performance is not a guarantee of future performance. SKW (Investment Advisor) do not provide any Assured/ Guaranteed Return/Profit services, any Profit Sharing services, and Services which are not mention in Company website, Please beware of fraud calls/sms.</p>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeComponent