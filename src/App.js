
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  Navbar  from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './pages/Contact/Contact';
import NonAlcoholic from './pages/NonAlcoholic';
import Alcoholic from "./pages/Alcoholic";
import DrinksDetails from "./pages/DrinksDetails";
import CocktailsByLetter from './components/CocktailsByLetter';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Alcoholic' element={<Alcoholic />} />
        <Route path='/Non_Alcoholic' element={<NonAlcoholic />} />
        <Route path='/DrinksDetails/:idDrink' element={<DrinksDetails />} />
        <Route path='/CocktailsByLetter/:selectedLetter' element={<CocktailsByLetter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
