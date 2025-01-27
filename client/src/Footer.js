
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
                <a href="#">Home<i className="fab fa-github"></i></a>
                <a href="">About<i className="fab fa-linkedin"></i></a>
                <a href="">Projects<i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="#">GitHub<i className="fab fa-github"></i></a>
                <a href="">LinkedIn<i className="fab fa-linkedin"></i></a>
                <a href="">Instagram<i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <p className="footer-credit">© 2024 Facundo Lopez Camino. All rights reserved.</p>
       </footer>
    );
}


export default Footer