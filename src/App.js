import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Protfolio from './pages/portfolio/Protfolio';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar';
import NotFound from './pages/404/NotFound';
import Themes from './components/Themes';


function App() {
  return (
      <Router>
        <Navbar />
        <Themes/>
        <Routes>
          <Route path='portfolio-react' index element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='portfolio' element={<Protfolio/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
  )
}

export default App;
