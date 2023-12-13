
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Products from "../src/pages/products/products.jsx";
import Contact from "../src/pages/contact/contact.jsx"
import Details from "../src/components/moreAboutCard/moreAboutCard.jsx"

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products/details/:id' element={<Details />} />
      <Route path='*' element={<h1> page not found</h1>} />
    </Routes>
  );
}

export default App;
