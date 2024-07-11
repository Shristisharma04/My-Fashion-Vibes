import './styles/custom.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Product from './pages/ProductPage/Product';
import DetailsPage from './components/DetailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/productDetails/:id' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
