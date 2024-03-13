"use client"
import React, { useEffect, useState } from 'react'
import bodyImg from '../../public/Screenshot 2023-12-07 182319.png'
import andriodImg from '../../public/Asset_5-8-pzvkaa9y61ql4mpsh922wb0xood6yaa25mexbfklks.png'
import appleImg from '../../public/Asset_4-8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import intraday from "../../public/intraday.png"
import shorterm from "../../public/short-term.png"
import longterm from "../../public/long-term.png"
import graph from '../../public/graph-1.png'
import idea from '../../public/idea-1.png'
import customerCentric from '../../public/customer-centric-1.png'
import dedicated from '../../public/dedicated.png'
import time from '../../public/time.png'
import clientSupport from "../../public/client-support.png"
import riskManagement from "../../public/risk-manage-ment.png"
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import bajaj from '../../public/bajaj-finance.svg'
import axis from '../../public/axis-bank.svg'
import asian from '../../public/asian-paints.svg'
import FormComponent from "../FormComponent/FormComponent"
import Disclaimer from "../Disclaimer/Disclaimer"
import ModalComponent from '@/components/Modal/Modal'
import HomePopup from '@/components/HomePopup/HomePopup'


const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showHomePopup, setShowHomePopup] = useState(true);

  const handleCloseHomeModal = () => {
    setShowHomePopup(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const tag = 'F-Home'

  return (
    <div>
      <HomePopup showHomePopup={showHomePopup} closeHomePopup={handleCloseHomeModal} />
      <div className='marqTxt'>
        <Marquee className='dataFlow' autoFill pauseOnHover>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingInline: '20px' }}>
            <div style={{ paddingInline: '10px' }}>
              <Image src={asian} alt='asian' width={'100%'} height={'100%'} style={{ borderRadius: '50%' }}></Image>
            </div>
            <div>
              <h1> ASIANPAINT</h1>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingInline: '20px' }}>
            <div style={{ paddingInline: '10px' }}>
              <Image src={axis} alt='asian' width={'100%'} height={'100%'} style={{ borderRadius: '50%' }}></Image>
            </div>
            <div>
              <h1> AXIS BANK</h1>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ paddingInline: '10px' }}>
              <Image src={bajaj} alt='asian' width={'100%'} height={'100%'} style={{ borderRadius: '50%' }}></Image>
            </div>
            <div>
              <h1> BAJAJ</h1>
            </div>
          </div>
        </Marquee>
      </div>
      <div className='bodyContainer'>
        <div className='nameContainer'>
          <div className='getFinancial'>
            <h1>Get Financial Advice On Your Finger Tips!</h1>
            <h2 >with SEBI Registered Stock Investment Adviser</h2>
            <ul>
              <li>
                <h3 >More than 10000+ hours of research experience. </h3>
              </li>
              <li>
                <h3 >Customer-centric approach to solve all the investment-related queries.</h3>
              </li>
              <li> <h3 >In-depth analysis of trading charts for the generation of stock market signal.</h3>
              </li>
            </ul>
          </div>
          <div className='hireButtonContainer'>
            <button className='hireButton' onClick={handleShow}>
              HIRE EXPERT NOW  <FontAwesomeIcon className="fa-icon" icon={faCircleArrowRight} />
            </button>
            <ModalComponent
              show={showModal}
              closePopup={handleClose}
            />

          </div>
        </div>
        <div className='imgMain'>
          <Image src={bodyImg} alt="bodyImg" className='bodyImg' />
        </div>
      </div>
      <div className='download'>
        <h1 style={{ fontSize: '35px', fontWeight: 'bold', color: '#30344D' }}>Download the App</h1>
        <button><Image src={andriodImg} alt='' className='androidImg' /></button>
        <button>  <Image src={appleImg} alt='' className='appleImg' /></button>
      </div>
      <div className='offerContainer'>
        <div> <center><h1>What We Offer ?</h1></center></div>
        <div>
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '50px' }}></div>
          </div>
          <div className='termImagesContainer'>
            <div className='termNameContainer'>
              <Image src={intraday} alt="Logo" className='termImages' />
              <h1>Intraday</h1>
            </div>
            <div className='termNameContainer'>
              <Image src={shorterm} alt="Logo" className='termImages' />
              <h1>Short Term</h1>
            </div>
            <div className='termNameContainer'>
              <Image src={longterm} alt="Logo" className='termImages' />
              <h1>Long Term</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='tradeMainContainer'>
        <div className='whyTraders'>
          <h1>Why Traders Choose US</h1>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '50px' }}></div>
        </div>
        <div className='tradeImagesContainer'>
          <div className='tradeSubContainet'>
            <div> <Image src={graph} alt="Logo" className='tradeImages' /></div>
            <div className='tradeFont'>15+ Years of experience in technical and fundamental research</div>
          </div>
          <div className='tradeSubContainet'>
            <div><Image src={customerCentric} alt="Logo" className='tradeImages' /></div>
            <div className='tradeFont'>We have a customer-centric approach to solve all the investment-related queries.</div>
          </div>
          <div className='tradeSubContainet'>
            <div> <Image src={idea} alt="Logo" className='tradeImages' /></div>
            <div className='tradeFont'>In-depth analysis of trading charts for the generation of stock market signals.</div>
          </div>
        </div>
      </div>
      <div className="mainHowWorksContainer">
        <div className='howHeader'>
          <h1>How It Work&apos;s?</h1>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '50px' }}></div>
        </div>
        <div className='howWorksImgcontainer'>
          <div className='howImgSubContainer'>
            <div>   <Image src={dedicated} alt="Logo" className='howImages' /></div>
            <div className='howWorkFont' >Dedicated Research Team</div>
          </div>
          <div className='howImgSubContainer'>
            <div><Image src={time} alt="Logo" className='howImages' /></div>
            <div className='howWorkFont' >Time and Tested signal generation models</div>
          </div>
          <div className='howImgSubContainer'>
            <div> <Image src={clientSupport} alt="Logo" className='howImages' /></div>
            <div className='howWorkFont' >Client support and query resolution on a real time basis</div>
          </div>
          <div className='howImgSubContainer'>
            <div> <Image src={riskManagement} alt="Logo" className='howImages' /></div>
            <div className='howWorkFont' >Customized Products as per Risk Profiling and Return Requirement of Clients</div>
          </div>
        </div>
      </div>
      <div>
        <FormComponent tag={tag} />
      </div>
      <div>
        <Disclaimer />
      </div>
    </div>
  )
}

export default HomePage
