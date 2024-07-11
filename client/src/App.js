import logo from './pictures/Charmy.png';
import './styling/App.css';
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my NEW Portfolio!!
        </p>
        <a
          className="App-link"
          href="https://flopez99.github.io/PersonalSite/"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here for my OLD Portfolio!
        </a>
        <br/>
        <a
          className="App-link"
          href="https://github.com/Flopez99"
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
