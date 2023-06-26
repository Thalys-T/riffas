import React, { useState } from 'react';
import './RiffaButton.scss';


const RiffaButton: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [totalNumbers, setTotalNumbers] = useState(99);

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setTotalNumbers(value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowInput(false);
  };

  const renderNumberButtons = () => {
    return Array.from({ length: totalNumbers }).map((_, index) => (
      <button key={index + 1}>{index + 1}</button>
    ));
  };

  return (
    <>
      {!showInput && (
        <button onClick={handleButtonClick}>Adicionar Números</button>
      )}

      {showInput && (
        <form onSubmit={handleFormSubmit}>
          <label>
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
      )}

      {totalNumbers > 0 && renderNumberButtons()}
    </>
  );
};

export default RiffaButton;
