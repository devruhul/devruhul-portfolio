import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Portfolios from './components/Portfolios/Portfolios';
import Services from './components/Services/Services';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="App">
      {/* All components are showing header */}
      <Header />
      {/* Full website route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={< Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* All components are showing footer */}
      <Footer />
    </div>
  );
}

export default App;
