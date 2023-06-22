import { Component } from 'react';
import Button from '../src/components/Button'
import './global.scss';



function App(){
  return (
    <div className="rifa-primary-content">
      <div id="rifa-header">
        <h2> Lista de Números </h2>
        <div id="header-description">
          <div className="number-status">
            <div id="selected-numbers"></div>
            <p> Indisponíveis </p>
          </div>
          <div className="number-status">
            <div id="non-selected-numbers"></div>
            <p> Disponíveis </p>
          </div>
        </div>
      </div>
      <div id="numbers-catalog">
        <Button tittle='Número 1'/>
        <Button tittle='Número 2'/>
        <Button tittle='Número 3'/>
        <Button tittle='Número 4'/>
        <Button tittle='Número 5'/>
      </div>
    </div>
  )
}

export default App

