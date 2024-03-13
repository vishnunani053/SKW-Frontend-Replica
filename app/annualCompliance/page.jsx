'use client';
import React from 'react'
import { Row, Col, Table,Container ,Button} from "reactstrap"
import GrievanceForm from '@/components/GrievanceForm/GrievanceForm'
import PublicIcon from '@mui/icons-material/Public';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';


const AnnualCompliancePage = () => {
  const tag = 'F-ANNUAL COMPILIANCE'
  return (
    <div>
      <Container>
        <div className='forContainerPadding'>
            <Row className='mt-3'>
                <Col>
                <div className='annualtitle'>
                    <h1>Annual Compliance Audit</h1>
                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                <div style={{ borderColor: '#505050', borderWidth: '1px',borderStyle:'solid', width: '600px' }}></div>
              </div>
                    <h4>“Disclosure with respect to compliance with Annual compliance audit requirement under Regulation 19(3) of SECURITIES AND EXCHANGE BOARD OF INDIA (INVESTMENT ADVISERS) REGULATIONS, 2013 for last and current financial year are as under:</h4>
                </div>
                <div>
                <Table bordered className='moreTable border-black'>
                <thead className='annualTableHead'>
                  <tr>
                    <th>SR NO.</th>
                    <th>FINANCIAL YEAR</th>
                    <th>COMPLIANCE AUDIT STATUS</th>
                    <th>REMARK, IF ANY</th>
                  </tr>
                </thead>
                <tbody className='annualTableBody'>
                  <tr>
                    <th scope="row">1</th>
                    <td>Financial Year 2020-2021</td>
                    <td>Conducted</td>
                    <td>NA</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Financial Year 2021-2022</td>
                    <td>Conducted</td>
                    <td>NA</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Finacial Year 2022-2023</td>
                    <td>Conducted</td>
                    <td>NA</td>
                  </tr>
                </tbody>
              </Table>
                </div>
                <div className='annualList'>
                  <ul>
                    <li><p>2020-21 Compliance audit is conducted and there is no remarks</p></li>
                    <li><p>2021-22 Compliance audit is conducted and there is no remarks</p></li>
                    <li><p>2022-23 Compliance audit is under process</p></li>
                  </ul>
                </div>
                </Col>
            </Row>
        </div>
        </Container>
        <div>
          <GrievanceForm/>
        </div>
        <div>
        <div className='annualScorebtns'>
        <Button><PublicIcon/> SCORES WEBSITE</Button>
        <Button><BookOnlineOutlinedIcon/> SCORES APPLICATION</Button>
      </div>
        </div>
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

export default AnnualCompliancePage