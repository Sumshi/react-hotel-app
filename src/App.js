import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

// for routing pages such as about, home, contact etc use react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        {/*define ur routes inside routes*/}
        {/* <Route path='/' exact component={Home}/> */}
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
