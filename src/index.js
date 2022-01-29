import { render }from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const mountElement = document.getElementById('root'); 

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  mountElement
);