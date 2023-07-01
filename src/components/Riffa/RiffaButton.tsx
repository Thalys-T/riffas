import React, { useState } from 'react';
import './RiffaButton.scss';
import ReactModal from 'react-modal';

const RiffaButton: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [totalNumbers, setTotalNumbers] = useState(99);
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setTotalNumbers(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const renderNumberButtons = () => {
    return Array.from({ length: totalNumbers }).map((_, index) => (
      <button key={index + 1}>{index + 1}</button>
    ));
  };

  function handleClickOpenModal() {
    setOpenModal(true);
  }

  function handleClickCloseModal() {
    setOpenModal(false);
  }

  function powerFunction(){
    renderNumberButtons();
    handleClickCloseModal();
  }

  const modalStyle = {
    content: {
      width: '33%',
      height: '33%',
      top: '30%',
      margin: '0 auto',
      padding: '2rem',
      border: '1rem solid #1d3557',
      backgroundColor: '#457b9d',
      inset: '30%',
    }
  }

  return (
    <>
      <div className="button-wrapper">

        {openModal == false && totalNumbers > 0 && renderNumberButtons()}
      </div>
      {!showInput && (
        <button id="add-number-button" onClick={handleClickOpenModal}>Adicionar Números</button>
      )}

      <ReactModal
        isOpen={openModal}
        style={modalStyle}
      >
        <div id="modal-internal">
          <h1> RIFFA </h1>
          <form onSubmit={handleFormSubmit}>
            <label style={{color: 'black'}}>
              Escolher o tamanho da Rifa:
              <input
                type="number"
                value={totalNumbers}
                onChange={handleInputChange}
                min="1"
              />
            </label>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default RiffaButton;
