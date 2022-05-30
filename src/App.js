import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { DisplayPage } from './components/DisplayPage';

function App() {
  // const Div = styled.div`
  //   display:grid;
  //   grid-template-column: 350px 350px 350px;
  //   grid-gap: 20px;
  // `
  return (
    <div className='App'>
      <h1>SHOOT GAME</h1>

       <div>
           <DisplayPage />
        </div>
      
    </div>
  );
}

export default App;
