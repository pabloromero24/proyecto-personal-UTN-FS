import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./components/pages/HomePage";
import NosotrosPage from "./components/pages/NosotrosPage";
import SkateboardsPage from "./components/pages/SkateboardsPage";
import LongboardsPage from "./components/pages/LongboardsPage";
import IndumentariaPage from "./components/pages/IndumentariaPage";
import ContactoPage from "./components/pages/ContactoPage";

// import './App.css';

function App() {
  return (
    <div className="App"> 
    <Header/> 
     <BrowserRouter> 
        <Nav/>                                
        <Routes>
          <Route path="/" element={<HomePage />} />                
          <Route path="/Nosotros" element={<NosotrosPage />} />
          <Route path="/Skateboards" element={<SkateboardsPage />} />
          <Route path="/Longboards" element={<LongboardsPage />} />
          <Route path="/Indumentaria" element={<IndumentariaPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
        </Routes>                 
     </BrowserRouter>
    <Footer/>                   
    </div>
  );
}

export default App;
