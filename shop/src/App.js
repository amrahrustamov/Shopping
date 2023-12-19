
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Products from "../src/pages/products/products.jsx";
import Contact from "../src/pages/contact/contact.jsx"
import Details from "../src/components/moreAboutCard/moreAboutCard.jsx"
import CategoryForMen from './components/categoryForMen/categoryForMen.jsx';
import CategoryForWomen from './components/categoryForWomen/categoryForWomen.jsx';
import CategoryForElectronics from './components/categoryForElectronics/categoryForElectronics.jsx';
import CategoryForJewelery from './components/categoryForJewelery/categoryForJewelery.jsx';
import PageNotFound from './pages/pageNotFound/pageNotFound.jsx';

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products/details/:id' element={<Details />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/Mens_clothing' element={<CategoryForMen />} />
      <Route path='/Women_clothing' element={<CategoryForWomen />} />
      <Route path='/Electronics' element={<CategoryForElectronics />} />
      <Route path='/Jewelery' element={<CategoryForJewelery />} />
    </Routes>
  );
}

export default App;
