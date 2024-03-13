'use client';
import React from 'react'
import { Row, Col, Table, Container, Button } from "reactstrap"
import ComplaintForm from '@/components/ComplaintForm/ComplaintForm'
import PublicIcon from '@mui/icons-material/Public';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';


const ComplaintPage = () => {
  const tag = 'F-COMPLAINT'
  return (
    <div>
      <Container>
        <div className='forContainerPadding'>
          <div className='titleOfMore'>
            <h1>Complaint Board</h1>
            <h4>As on 7th Dec 2023</h4>
          </div>
          <Row>
            <Col>
              <div className='monthendingContainer'>
                <h2>Data for the month ending - <u>Nov 2023</u></h2>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '25px', marginLeft: '1px' }}></div>
                </div>
                <Table responsive bordered className='moreTable border-black'>
                  <thead className='moreTableHead'>
                    <tr>
                      <th>SR NO.</th>
                      <th>RECEIVED FROM</th>
                      <th>PENDING AT END OF LAST MONTH</th>
                      <th>RECEIVED</th>
                      <th>RESOLVED</th>
                      <th>TOTAL PENDING</th>
                      <th>PENDING COMPLAINTS &gt;3MONTHS</th>
                      <th>AVERAGE RESOLUTION TIME (IN DAYS)</th>
                    </tr>
                  </thead>
                  <tbody className='moreTableBody'>
                    <tr>
                      <th scope="row">1</th>
                      <td>Directly from Investor</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>SEBI (SCORES)</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Other Sources (if any)</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td>Grand Total</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='monthendingContainer'>
                <h2>Trend of Monthly disposal of complaints</h2>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '25px', marginLeft: '1px' }}></div>
                </div>
                <Table responsive bordered className='moreTable border-black'>
                  <thead className='moreTableHead'>
                    <tr>
                      <th>SR NO.</th>
                      <th>RECEIVED FROM</th>
                      <th>CARRIED FORWARD FROM PREVIOUS MONTH</th>
                      <th>RECEIVED</th>
                      <th>RESOLVED</th>
                      <th>PENDING	</th>
                    </tr>
                  </thead>
                  <tbody className='moreTableBody'>
                    <tr>
                      <th scope="row">1</th>
                      <td>Dec, 2022</td>
                      <td>0</td>
                      <td>2</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jan,2022</td>
                      <td>1</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Feb,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Mar,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>April,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>May,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>June,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>July,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>August,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>September,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>October,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>November,2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Grand total of last 12 months</td>
                      <td>9</td>
                      <td>9</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='monthendingContainer'>
                <h2>Trend of Annual disposal of complaints</h2>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '25px', marginLeft: '1px' }}></div>
                </div>
                <Table responsive bordered className='moreTable border-black'>
                  <thead className='moreTableHead'>
                    <tr>
                      <th>SR NO.</th>
                      <th>RECEIVED FROM</th>
                      <th>CARRIED FORWARD FROM PREVIOUS MONTH</th>
                      <th>RECEIVED</th>
                      <th>RESOLVED</th>
                      <th>PENDING	</th>
                    </tr>
                  </thead>
                  <tbody className='moreTableBody'>
                    <tr>
                      <th scope="row">1</th>
                      <td>2019-2020</td>
                      <td>0</td>
                      <td>2</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>2020-2021</td>
                      <td>1</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>2021-2022</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>2022-2023</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>2023-2024</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Grand Total</td>
                      <td>31</td>
                      <td>30</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
                <ul className='detailsUl'>
                  <li><p>Data is updated on 7th of every month.</p></li>
                  <li><p>Data presented here is taken from score portal.</p></li>
                  <li><p>Importance is given to resolve the complaint in prescribed TAT.</p></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <ComplaintForm />
      </div>
      <Container>
        <div className='complaintScorebtns'>
          <Button><PublicIcon /> SCORES WEBSITE</Button>
          <Button><BookOnlineOutlinedIcon /> SCORES APPLICATION</Button>
          <Button><HandshakeOutlinedIcon /> SMART ODR</Button>
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

export default ComplaintPage