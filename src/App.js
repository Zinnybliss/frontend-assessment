
import './App.css';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes , Route }  from 'react-router-dom'
import Contact from './components/Contact';
import Github from './components/Github';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<MainBody/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/github" element={<Github />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
