'use client';
import React from 'react'
import { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Container, Label, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import carresImg from '@/public/career.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormComponent from '@/components/FormComponent/FormComponent';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup"


const api_url=process.env.API_URL;

const createData = (name, calories, fat, carbs) => {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Digital Marketing Internship', 'Bangalore', 'Marketing', 'September 20, 2022'),
  createData('BDM Sales', 'Bangalore', 'Marketing', 'September 20, 2022'),
  createData('BDE Sales', 'Bangalore', 'Marketing', 'September 20, 2022'),
  createData('Full Stack Devloper', 'Bangalore', 'Technology', 'September 20, 2022'),
  createData('HR Executive', 'Bangalore', 'Marketing', 'September 20, 2022'),
];

const CareersPage = () => {
  const [recordFile, setRecordFile] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const tag = 'F-CARRERS'

  // ...

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    // Check if the selected file is a PDF
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setRecordFile(selectedFile);
    } else {
      // Display an error or alert if the file is not a PDF
      alert('Please select a valid PDF file.');
      event.target.value = '';
      setRecordFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = new FormData()
    const paylaod = {
      name: data.get('name'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      profileType: data.get('profileType'),
    };

    formData.append("jsonData", JSON.stringify(paylaod));
    formData.append("pdfFile", recordFile)

    try {
      const url = `${api_url}/addCareerForm`;
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const result = await response.json();
      if (result) {
        console.log("responseData", result);
        e.target.reset();
        setModalShow(true)
      }
      console.log("data added successfully!!");
    } catch (error) {
      console.log('Error:', error);
    };
  };

  return (
    <div>
      <div>
        <Container>
        <div className='aboutBreadCrumb'>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem >
              <a href="/about">Company overview</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              Careers
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        </Container>
        <Container>
        <div className='forContainerPadding'>
          <Row>  
            <Col md={8} className='coloumnsforTablet'>
              <div className='careersTitle'>
                <h1>Careers</h1>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '3rem', marginLeft: '1px' }}></div>
                </div>
                <p>SKW INVESTMENT ADVISER believe&apos;s in excellence. We specialize in hiring people who have the drive to succeed and the will to implement the discipline required to succeed. We focus on nurturing our team and providing our team an environment that while will grow their own skills. We focus on eliminating stress and pressure so our team work freely and open minded.</p>
              </div>
              <Row>
                <Col>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className='bg-secondary text-white'
                    >
                      <Typography>What does SKW INVESTMENT ADVSIER do?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='bg-info'>
                      <Typography>
                        When you work at SKW, you get to be part of a team that is known for its performance. We are efficiency driven professionals who focus on the achieving target on at any cost.                  </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"

                      className='bg-secondary text-white'
                    >
                      <Typography>What industries do you specialize in?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='bg-info'>
                      <Typography>
                        We provide one of the best investment advisory services on the basis of various technical setups for generating the recommendations in all sectors. We also provide a healthy atmosphere for work to all our stake holders.  </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Col>
              </Row>
              <div className='benifitsRewardsContainer'>
                <Row>
                  <Col md={5}>
                    <div>
                      <Image src={carresImg} alt='careersImg' />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className='benifitsSummary'>
                      <h4>Benefits and Rewards</h4>
                      <p>We care for our clients invest as our investment . We think and act like family member and partners, not academic advisors. We share our clients aspirations, work to understand their reality, and align our incentives with their objectives — so they know we’re in this together.
                      </p>
                      <p>Personal impact, mentoring, and teamwork are just a few of the benefits of building a career at SKW.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className='coloumnsforTablet'>
              <div className='careerformContainer'>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <h5 style={{ textAlign: 'center' }}>Career</h5>
                    {/* <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ borderColor: '#E99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                  </div> */}
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="name">Name</Label> */}
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required

                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="phno">Phone Number</Label> */}
                    <Input
                      type="number"
                      name="phoneNumber"
                      id="phno"
                      placeholder="Phone number"
                      required

                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="email">Email</Label> */}
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required

                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <Label for="selectBox1">Select Box 1</Label> */}
                    <Input
                      type="select"
                      name="profileType"
                      id="selectBox1"

                    >
                      {/* Add options for the select box */}
                      <option selected disabled value=''>Select Profile</option>
                      <option className='option'>BDE-Sales</option>
                      <option className='option'>BDM-Sales</option>
                      <option className='option'>HR Executive</option>
                      <option className='option'>Digital Marketing Manager</option>
                      <option className='option'>Content writer</option>
                      <option className='option'>Application Development</option>
                      <option className='option'>Technical Research Analyst</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="textarea">Upload Resume</Label>
                    <Input
                      type="file"
                      name="uploadResume"
                      id="textarea"
                      placeholder="Upload Resume"
                      onChange={handleFileChange}
                      required
                    />
                  </FormGroup>
                  <Button type="submit" className='submitButton'>
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} className='coloumnsforTablet'>
              <div className='careerTableContainer'>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" style={{ width: 'fixed width', height: 'fixed height' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>job posting title</TableCell>
                        <TableCell className='forMobileNotShow' align="center">Location</TableCell>
                        <TableCell align="center">Department</TableCell>
                        <TableCell align="center">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">{row.name}</TableCell>
                          <TableCell className='forMobileNotShow' align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                          <TableCell align="center">{row.carbs}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </div>
      <div>
        <FormComponent tag={tag} />
      </div>
      <div>
        <Disclaimer />
      </div>
      <div>
        <FooterPage />
      </div>
      <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default CareersPage