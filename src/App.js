import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./pages/Contact/Contact";
import NonAlcoholic from "./pages/NonAlcoholic";
import Alcoholic from "./pages/Alcoholic";
import DrinksDetails from "./pages/DrinksDetails";
import CocktailsByLetter from "./components/CocktailsByLetter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage"
import { AuthContextProvider } from "./context/AuthContext";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/Alcoholic" element={<Alcoholic />} />
        <Route path="/Non_Alcoholic" element={<NonAlcoholic />} />
        <Route path="/DrinksDetails/:idDrink" element={<DrinksDetails />} />
        <Route
          path="/CocktailsByLetter/:selectedLetter"
          element={<CocktailsByLetter />}
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes >
    //     <Route path='/' element={<Home />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/Alcoholic' element={<Alcoholic />} />
    //     <Route path='/Non_Alcoholic' element={<NonAlcoholic />} />
    //     <Route path='/DrinksDetails/:idDrink' element={<DrinksDetails />} />
    //     <Route path='/CocktailsByLetter/:selectedLetter' element={<CocktailsByLetter />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/register' element={<Register />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
