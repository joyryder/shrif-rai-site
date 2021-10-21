import Navbar from './components/Navbar';
import Social from './components/Social';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Social/>
      <div className="content">
        <About/>
      </div>
    </div>
  );
}

export default App;
