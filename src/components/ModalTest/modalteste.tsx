import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalteste.scss';

const ExampleModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      
      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal"
        overlayClassName="custom-modal__overlay"
      >
        {/* Modal Content */}
        <h2>Hello Modal</h2>
        <p>This is a modal window.</p>

        <button onClick={() => setModalIsOpen(false)} className="custom-modal__button">
          Close Modal
        </button>
      </Modal>
      
    </>
  );
  console.log('clicou');
};


export default ExampleModal;
