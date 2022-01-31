import { Route, Routes } from 'react-router-dom';
import { MainRegisterProduct } from './Components/MainRegisterProduct';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/addProduct' element={ <MainRegisterProduct />} />
      <Route path='/' element={<MainRegisterProduct />} />
    </Routes>
  );
}

export default App;
