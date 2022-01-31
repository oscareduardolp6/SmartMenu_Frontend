import { Route, Routes } from 'react-router-dom';
import { MainRegisterProduct } from './Components/MainRegisterProduct';
import { ShowProducts } from './Components/ShowProducts';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/addProduct' element={ <MainRegisterProduct />} />
      <Route path='/' element={<ShowProducts />} />
    </Routes>
  );
}

export default App;
