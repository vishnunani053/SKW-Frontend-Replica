'use client';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function HomePopup({ showHomePopup, closeHomePopup }) {

    return (
        <>
            <Modal
            centered
            show={showHomePopup}
            onHide={closeHomePopup}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"     
                       
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Home Page
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Disclaimer. <br />
                        1. Kindly do not make any payment in personal A/C, or any Google pay, Phonepe, Paytm number. We accept the payment in Company&apos;s Current AC in the name of SKW Investment Adviser with Bank account number – 50200061199882 <br />
                        Gpay,Phonepe,Paytm number- 9513738822 <br />

                        2. Kindly do not make any payment in the name of Demate opening/Handling if done SKW Investment will not be liable for same. <br />
                        3.Kindly Fill-Up the Risk Profilling form on website before making payment. <br />
                        4. We do not have any sister company, if any person is claiming about same kindly inform us on info@skwinvstmentadviser.com or 8550000890.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HomePopup;