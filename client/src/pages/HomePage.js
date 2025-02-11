import logo from '../assets/Profile_Pic_Circle.jpg';
import '../styling/App.css';

function HomePage() {
  return (
    <div className="App">
      <body className='App-header'>
        <div className='homepage-picture'>
          <h1 className='intro'>Hello, World!</h1>
          <h1 className='intro-2'>I'm Facundo!</h1>
        </div>

        <div className='homepage-content'>
          <div className='profile-section'>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <div className='personal-introduction'>
              <h2>Who am I?</h2>
              <p>I’m a recent graduate passionate about software development, with experience in full-stack development, game development, and machine learning. I love traveling and exploring in my free time.</p>
            </div> */}
          </div>

          <div className='section'>
            <h1 className='section-header'>
              Welcome to my Portfolio,
            </h1>
            <p className='section-text'> Here, you'll discover insights into my journey as a developer, showcasing my skills and experiences. Explore the projects I've worked on, and find all the ways to connect with me. Nice to meet you!</p>
            <div className='personal-introduction'>
              <h2>Who am I?</h2>
              <p>I’m a recent graduate passionate about software development, with experience in full-stack development, game development, and machine learning. I love traveling and exploring in my free time. Feel free to look around and learn more!</p>
            </div>
          </div>
          <br/>
        </div>
      </body>      
    </div>
  );
}

export default HomePage;
