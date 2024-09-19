import logo from '../pictures/Charmy.png';
import '../styling/App.css';
import Navbar from '../Navbar.js'

function AboutPage() {
  return (
    <div className="AboutPage">
      <Navbar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my ABOUT PAGE!!
        </p>
      </header>
    </div>
  );
}

export default AboutPage;
