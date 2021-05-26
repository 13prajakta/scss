import logo from './logo.svg';
import Nav from './Nav.js'
import Carousal from './Carousal.js'
import About from './About.js'
import Footer from './Footer.js'
import './App.css';


function App() {
  return (
    <div className="App">
     <Nav />
     <Carousal />
     <About />
     <Footer />
    </div>
  );
}

export default App;
