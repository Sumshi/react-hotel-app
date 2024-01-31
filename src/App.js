import './App.css';
import Navbar from './components/Navbar';
// for routing pages such as about, home, contact etc use react-router-dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
