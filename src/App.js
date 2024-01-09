import { Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './component/Data';
import Navbar from './component/Navbar';
import Cart from './component/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Data />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <Navbar /> */}
      {/* <Data /> */}
    </div>
  );
}

export default App;
