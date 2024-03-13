"use client";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SuccessPopup = (props)=> {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         Data Submitted Sucessfully
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>       
      </Modal.Footer>
    </Modal>
  );
}

export default SuccessPopup;