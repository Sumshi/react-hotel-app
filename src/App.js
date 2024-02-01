import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// for routing pages such as about, home, contact etc use react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        {/*define ur routes inside routes*/}
        <Route path='/' exact component={Home}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
