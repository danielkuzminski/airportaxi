//styles
import './App.css';

//components
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Order from './components/Order';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mobile'>
        <Landing />
        <Order />
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
