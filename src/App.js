import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RegisterProduct } from './Components/RegisterProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RegisterProduct />} />
    </Routes>
  );
}

export default App;
