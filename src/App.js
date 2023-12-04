
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  Navbar  from './components/Navbar/Navbar';
import Home from './components/Home';
import Contact from './pages/Contact';
import About from './components/About';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
