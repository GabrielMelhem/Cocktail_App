
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  Navbar  from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './components/About';
import NonAlcoholic from './pages/NonAlcoholic';
import Alcoholic from "./pages/Alcoholic";
import DrinksDetails from "./pages/DrinksDetails";

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Alcoholic' element={<Alcoholic />} />
        <Route path='/Non_Alcoholic' element={<NonAlcoholic />} />
        <Route path='/DrinksDetails' element={<DrinksDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
