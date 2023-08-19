import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/media.scss"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>

      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
