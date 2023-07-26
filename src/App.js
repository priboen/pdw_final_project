import Navbar from './components/Navbar';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Videotron from './components/Video';

function App() {
  return <div>
    <Navbar />
    <Header />
    <Videotron />
    <Home /> 
    <Footer />
    </div>;
}

export default App;
