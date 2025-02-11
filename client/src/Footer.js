import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>About Me</h3>
              <p>I'm a full-stack developer passionate about creating interactive web experiences.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="social-icons">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
              </div>
            </div>
            <div className="footer-section">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/Flopez99">GitHub<i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/facundo-lopezcamino/">LinkedIn<i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/facundito_999/">Instagram<i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <p className="footer-credit">© 2025 Facundo Lopez Camino. All rights reserved.</p>
       </footer>
    );
}


export default Footer