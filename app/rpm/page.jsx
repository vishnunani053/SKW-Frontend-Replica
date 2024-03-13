"use client";
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import FooterPage from '@/components/Footer/Footer';
import FormComponent from '@/components/FormComponent/FormComponent';
import React from 'react'
import { useState, useEffect } from 'react';
import { Row, Col, Table, Form, Label, Input, FormGroup, Button, Container } from "reactstrap"
import SuccessPopup from "@/components/SuccessPopup/SuccessPopup";

const api_url = process.env.API_URL;

const RpmPage = () => {
  const tag = 'F-RPM'
  const questionsArray = [
    {
      id: 1,
      question: "1.What is your Age Group?*",
      options: [
        { label: "18 to 30 Years", score: 3, id: 1 },
        { label: "31 to 45 Years", score: 2, id: 2 },
        { label: "46 to 60 Years", score: 1, id: 3 },
        { label: "Above 60 Years", score: 0.5, id: 4 },
      ],
    },
    {
      id: 2,
      question: "2.What is your annual income range ?*",
      options: [
        { label: "Between Rs. 2.5 Lakh to Rs. 5 Lakh", score: 0.5, id: 5 },
        { label: "Between Rs. 5 Lakh to Rs. 10 Lakh", score: 1, id: 6 },
        { label: "Between Rs. 10 Lakh to Rs. 20 Lakh", score: 2, id: 7 },
        { label: "Rs. 20 Lakh & Above", score: 3, id: 8 },
      ],
    },
    {
      id: 3,
      question: "3.What is your primary source of income?*",
      options: [
        { label: "Business/ Agriculture", score: 3, id: 9 },
        { label: "Salary", score: 2, id: 10 },
        { label: "Pension/ PF retired", score: 1, id: 11 },
        { label: "Dependent on Other", score: 0.5, id: 12 },
      ],
    },
    {
      id: 4,
      question: "4. What is your secondary source of Income?* ",
      options: [
        { label: "Rental", score: 3, id: 13 },
        { label: "Dividend", score: 2, id: 14 },
        { label: "Others", score: 1, id: 15 },
        { label: "None", score: 0.5, id: 16 },
      ],
    },
    {
      id: 5,
      question: "5. What is your proposed Investment amount?* ",
      options: [
        { label: "Less than Rs. 1 Lakh", score: 0.5, id: 17 },
        { label: "Between Rs. 1 Lakh to Rs. 3 Lakh", score: 1, id: 18 },
        { label: "Between Rs. 3 Lakh to Rs. 5 Lakh", score: 2, id: 19 },
        { label: "Rs. 5 Lakh & Above", score: 3, id: 20 },
      ],
    },
    {
      id: 6,
      question: "6. What is the value of your current portfolio?* ",
      options: [
        { label: "Less than Rs. 1 Lakh", score: 0.5, id: 21 },
        { label: "Between Rs. 1 Lakh to Rs. 3 Lakh", score: 1, id: 22 },
        { label: "Between Rs. 3 Lakh to Rs. 5 Lakh", score: 2, id: 23 },
        { label: "Rs. 5 Lakh & Above", score: 3, id: 24 },
      ],
    },
    {
      id: 7,
      question: "7. What is the value of your borrowings/ liabilities as on date?*",
      options: [
        { label: "Below Rs. 5 Lakh", score: 3, id: 25 },
        { label: "Rs. 5 Lakh to Rs. 10 Lakh", score: 2, id: 26 },
        { label: "Rs. 10 to Rs. 20 Lakh", score: 1, id: 27 },
        { label: "Rs. 20 lakh & above", score: 0.5, id: 28 },
      ],
    },
    {
      id: 8,
      question: "8.What percentage of your income is used in paying of your debt/ EMI’s? * ",
      options: [
        { label: "Below 15%", score: 3, id: 29 },
        { label: "Between 15% – 30%", score: 2, id: 30 },
        { label: "Between 30% – 45%", score: 1, id: 31 },
        { label: "Above 45%", score: 0.5, id: 32 },
      ],
    },
    {
      id: 9,
      question: "9. What is your investment objective?*",
      options: [
        { label: "Targeting high investment returns, willing to accept high risk including full capital loss", score: 3, id: 33 },
        { label: "Targeting high investment returns, willing to accept moderate risk with some capital loss", score: 2, id: 34 },
        { label: "Targeting medium investment returns, willing to accept less risk with less loss of capital", score: 1, id: 35 },
        { label: "Targeting low investment returns, willing to accept minimum loss of capital", score: 0.5, id: 36 },
      ],
    },
    {
      id: 10,
      question: "10. What would you do if your investment amount is making loss ?* ",
      options: [
        { label: "Add more investment capital", score: 3, id: 37 },
        { label: "Wait for the investment amount to recover", score: 2, id: 38 },
        { label: "Exit the loss making investment and enter new investment immediately", score: 1, id: 39 },
        { label: "Exit the loss making investment and wait for next good opportunity", score: 0.5, id: 40 },
      ],
    },

  ];

  const declarationText = "I hereby declare that the details furnished above is submitted by me and is true and correct to the best of my knowledge and belief. I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it. I hereby declare that I am not making this application for the purpose of contravention of any Act, Rules, Regulations or any statute of legislation or any notifications/directions issued by any governmental or statutory authority from time to time. I also declare that I understand the risk involved by investment in stock market and I am looking forward to take your services on my own wish."
  const [selectedOptions, setSelectedOptions] = useState({});
  const [finalScore, setFinalScore] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);



  const handleChange = (option, questionId) => {
    // Update the selected options state
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  useEffect(() => {
    // Calculate the final score whenever selectedOptions change
    let score = 0;
    Object.values(selectedOptions).forEach((selectedOption) => {
      if (selectedOption) {
        score += selectedOption.score;
      }
    });
    setFinalScore(score);
  }, [selectedOptions]);
  console.log(finalScore)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const paylaod = {
      name: data.get('name'),
      email: data.get('email'),
      rpmScore: finalScore,
      responses: [],
      checkboxData: checkboxChecked ? declarationText : "", // Include checkbox data in payload
    };

    questionsArray.forEach((question) => {
      const selectedOption = selectedOptions[question.id] || null;
      const response = {
        question: {
          id: question.id,
          text: question.question,
        },
        selectedOption: selectedOption
          ? {
            id: selectedOption.id,
            label: selectedOption.label,
            score: selectedOption.score,
          }
          : null,
      };
      paylaod.responses.push(response);
    });

    console.log(paylaod);

    try {
      const url = `${api_url}/addRpmScore`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paylaod),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();

      if (result) {
        console.log("responseData", result);
        e.target.reset();
        setModalShow(true);
        setFinalScore(0);
        setCheckboxChecked(false); // Reset checkbox state
      }

      console.log("data added successfully!!");
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <Container>
        <div className='forContainerPadding'>
          <Row>
            <Col>
              <div className='rpmContainer'>
                <h1>RPM</h1>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: '#3fa005', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                </div>
                <h6>NOTE :- We have updated our product line from 01-02-2023. However, we will serve our existing clients in old service as well.</h6>
                <h1>Important Notice to Clients</h1>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                </div>
                <p className='mt-3'>Investment in financial market is subject to risk. In order to asses the individual risk bearing capacity we have created a Risk Profile Questionnaire to establish a basis for the advice we will provide. It is therefore important for you to complete this document as accurately and fully as possible.</p>
                <p>Failure to complete Risk Profile Questionnaire as stated above could result in advice being provided that is not appropriate to your individual needs, circumstances and objectives.</p>
                <h5>Please complete the below questionnaire in full.</h5>
                <p>Kindly answer each question honestly and accurately as failure to do so might result into investment risk profile which does not reflect your current attitude towards investing or which does not reflect your risk taking capability towards the investment which you make.</p>
                <h5>Investment Risk Profile Levels</h5>
                <p>Any deviation from expected returns is known as risk. We have categorized risk taking capability of a person on the basis of RPM questionnaires scores such as Aggressive, Moderate, Balanced, Conservative.</p>
                <h5>Low Risk (Score 5-9) :-<span className='spanText'> Low risk category is for traders/ investors who invest in basically in equity cash and similar products which involve less risk in the market.</span></h5>
                <h5>Medium Risk (Score 9.5-13.5) :- <span className='spanText'> Medium risk clients are less aggressive in their trades but they understand the level of risk involved in trades and invest according to it.</span></h5>
                <h5>Moderate Risk (Score 14-17) :-<span className='spanText'>Moderate risk clients prefer to take calculated risk which does not exceed above their capability.</span></h5>
                <h5>High Risk (Score 17& Above) :-<span className='spanText'>High risk clients are aggressive traders who are willing to take high risk with their investments.</span></h5>
                <p>As per our risk profile questionnaire <span className='inlineSpantag'>score</span> of the client may <span className='inlineSpantag'>range</span> from <span className='inlineSpantag'>5-30.</span></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='riskbasedContainer'>
                <h3>Risk Based Classification of the Services</h3>
                <div style={{ alignItems: 'left', display: 'flex', justifyContent: 'left' }}>
                  <div style={{ borderColor: ' #e99004', borderWidth: '3px', borderRadius: '5px', width: '40px', marginBottom: '10px', marginLeft: '1px' }}></div>
                </div>
                <div>
                  <Table bordered className='Risktable'>
                    <thead className='tableHead'>
                      <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Range</th>
                        <th>Risk</th>
                      </tr>
                    </thead>
                    <tbody className='tableBody'>
                      <tr>
                        <th scope="row">1</th>
                        <td>Wealth Compass, Finplan 360, Briefcase</td>
                        <td>5-9</td>
                        <td>Low</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Growth Gems, Stellar Blues</td>
                        <td>9.5-13.5</td>
                        <td>Medium</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Magic Moments, Weekend Star, Swing Lite</td>
                        <td>14-17</td>
                        <td>Moderate High</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Moderate High</td>
                        <td>17 & Above</td>
                        <td>High</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
          <div className='formrpmScoreContainer'>
            <h1>Get your RPM score.</h1>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Name
                    </Label>
                    <Input
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      required
                    ></Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Email
                    </Label>
                    <Input
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      required
                    ></Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row className='mt-4'>
                {/* Assuming you have a map function here */}
                {questionsArray.map((elem, index) => (
                  <Col md={6} key={index}>
                    <div>
                      <Label className='formQuestion'>{elem.question}</Label>
                      {elem.options.map((elems, ind) => (
                        <FormGroup check className='mt-3' key={ind}>
                          <Input
                            onChange={() => handleChange(elems, elem.id)}
                            type="radio"
                            id={`${elem.id}-input` + elems.id}
                            name={`question-${elem.id}`} // Use a unique name for each question
                            required
                          />
                          <Label htmlFor={`${elem.id}-input` + elems.id}>{elems.label}</Label>
                        </FormGroup>
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col>
                  <div className='formDeclaration'>
                    <h6>Applicant Declaration</h6>
                    <FormGroup check inline className='mt-4'>
                      <Input
                        type="checkbox"
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                        required
                      />
                      <Label check className='declarationText'>
                        I hereby declare that the details furnished above are submitted by me and are true and correct to the best of my knowledge and belief. I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it. I hereby declare that I am not making this application for the purpose of contravention of any Act, Rules, Regulations, or any statute of legislation or any notifications/directions issued by any governmental or statutory authority from time to time. I also declare that I understand the risk involved in the investment in the stock market, and I am looking forward to taking your services on my own wish.
                      </Label>
                    </FormGroup>

                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 style={{ color: '#666666', fontSize: '30px', fontFamily: 'sans-serif' }} name="rpmScore">YOUR SCORE IS {finalScore}</h4>
                  <div className='submitDetailsbtn'>
                    <Button type='submit'>Submit Details</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
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
      <SuccessPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default RpmPage