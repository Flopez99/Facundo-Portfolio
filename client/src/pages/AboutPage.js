import '../styling/App.css';
import '../styling/about_page.css';
import SkillsValues from './page_components/SkillsValues';

function AboutPage() {
  return (
    <div className="AboutPage">

      <body className="About-header">
        <div className='about-container'>

          <SkillsValues/>

          <div className='about-section'>
            <h1 className='section-header'>About Me</h1>
            <p className='section-text'>I am a recent Computer Science graduate with a solid foundation in full-stack development and a deep understanding of the Software Development Life Cycle (SDLC). My experience spans various domains, including game development, software testing, and web application design, making me a well-rounded engineer ready to tackle diverse challenges.</p>
            <p className='section-text'>I am actively seeking new opportunities to showcase my skills and contribute to innovative projects that push the boundaries of technology. In the meantime, I’m dedicated to enhancing my expertise through personal projects and exploring the world, combining my passion for travel with my love for technology. I believe that every experience, whether in coding or exploring new cultures, enriches my perspective and fuels my creativity.</p>
          </div>
        </div>
         
        <div className='about-section'>
          <h1 className='section-header'>My Story</h1>
          <p className='section-text'>Growing up in a small town in Argentina, I developed a strong fascination with computers and technology from a young age. At age 11, I moved to the U.S. and faced the daunting challenge of adapting to a new culture without knowing the language. However, my passion for technology became a bridge to connection. In middle school, I joined the Lego League team, where my enthusiasm for technology shone through, allowing me to forge friendships despite the language barrier.</p>
          <p className='section-text'>This experience marked my first foray into programming, where I learned to write simple programs and earned recognition for my efforts. Building on this foundation, I transitioned to the FIRST Robotics team, where we not only competed but also won the prestigious Chairman's Award at the World Championship.</p>
          <p className='section-text'>With this newfound love for programming, I realized it was my calling, prompting me to pursue a Bachelor's degree in Computer Science. Throughout my college years, I had the opportunity to work on a diverse range of projects across various languages and technologies, further solidifying my skills and passion.</p>
          <p className='section-text'>Now, as I look to the future, I am eager to embark on the next chapter of my journey in software development, seeking new challenges and opportunities to expand my skill set. I am excited about what lies ahead and the possibilities that await me in my career.</p>
        </div>
      </body>
    </div>
  );
}

export default AboutPage;
