import './global.scss';
import RiffaButton from './components/Riffa/RiffaButton';
import RiffaProduct from './components/RiffaProduct/RiffaProduct';
import ExampleModal from './components/ModalTest/modalteste';

function App() {
  return (
    <div id="page">
      <header>
        <h1> Rifinha da Galera! </h1>
      </header>
      <div className="rifa-primary-content">
        <RiffaProduct />
        <div id="rifa-header-and-catalog">
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
          <div id="numbers-catalog" className="number-button">
            <RiffaButton />
            <ExampleModal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

