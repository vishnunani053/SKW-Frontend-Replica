"use client";
import React from 'react'
import { Row, Col ,Container} from 'reactstrap'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';

const FaqPage = () => {
  const tag ='F-FAQ'
  return (
    <div>
      <Container>
      <div className='forContainerPadding'>
        <Row className='mb-4'>  
          <Col>
            <div className='faqTitle'>
              <h1>FAQ</h1>
              <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
              </div>
            </div>
            <div className='accordianColors'>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className='bg-secondary text-white'
                >
                  <Typography>What is SKW in SKW INVESTMENT ADVISER ?</Typography>
                </AccordionSummary>
                <AccordionDetails   className='bg-info'>
                  <Typography>
                    SKW means as Sumit Kumar Waghmare on which name SEBI has granted an investment adviser  license. SKW is the short form of his name.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                  className='bg-secondary text-white'
                >
                  <Typography>What are the timings of Equity Market?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    The timings for equity market is morning 9 am to 3.30 pm. <br /><br />
                    Market opens at 9am called as pre-open till 9.07am. Thereafter, normal market resumes from 9.15am to 3.30pm.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                  className='bg-secondary text-white'
                >
                  <Typography>What are the timings for commodities market?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Agricultural Commodities: 10am to 5pm <br /><br />
                    Bullion/Metals/Crude oil and internationally linked Agri commodities: 10am to 11.30pm
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What are Derivatives?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Derivatives are financial instruments that derive their value from the underlying asset. The most commonly used derivative instruments traded in India are: Futures and Options.   </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What do you understand by Security Market? What are the different types of Security Market?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Security market is a place where financial securities are traded (Bought and sold).<br /><br />
                    The different types of security market are:<br /><br />
                    Debt Market- Corporate Money Market, Government securities & Corporate Debt market.<br /><br />
                    Equity Market- Primary Market & Secondary Market<br /><br />
                    Derivative Market- Futures & Options Market.
                  </Typography>
                </AccordionDetails >
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What other services are you compatible with?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives.  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What is Beta of an asset?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Beta is a method of measuring systematic risk of an asset. It shows the sensitivity of how price of a security responds to changes in its underlying index. Beta is a way of measuring systematic risk of any asset. It shows how price of a security responds to changes in its respective index price. It indicates the extent of movement or price of a stock with respect to the movement of index in market. Assets that are riskier than average will have Beta greater than 1 and assets that are safer than average will have Beta lower than 1. Risk-free assets will have a Beta value of 0.    </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What do you mean by &apos;Bullish view on the market ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    Bullish view on the market indicates that the traders & investors are expecting the market to rise in the near, short or long term. Positions are usually taken depending on the view a trader has on the market.   </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What do you mean by &apos;Bearish view on the market&apos;?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    The timings for equity market is morning 9 am to 3.30 pm. <br /><br />
                    Market opens at 9am called as pre-open till 9.07am. Thereafter, normal market resumes from 9.15am to 3.30pm.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>Can you sell shares in the cash market if you don&apos;t hold them?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    This process is called short-selling. Investors and traders are allowed to sell shares in the cash market only on intra-day basis, i.e., short sellers cannot hold positions for the next day and will have to square off their short positions on the same day of execution.   </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>What are the main macroeconomic factors that influence the stock market?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    The macroeconomic factors that influence the stock market are:<br /><br />
                    Investment objectives and constraints<br />
                    Asset mix<br />
                    Designing of portfolio strategy<br />
                    Selecting securities<br />
                    Execution<br />
                    Revision of portfolio<br />
                    Evaluation.

                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  
                   className='bg-secondary text-white'
                >
                  <Typography>Who are the different types of Market participants?</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-info'>
                  <Typography>
                    The different types of market participants are:<br /><br />
                    Hedgers<br />
                    Speculators<br />
                    Arbitrageurs<br />
                    Retail market participants
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Col>
        </Row>
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

export default FaqPage