import "../styling/App.css";
import "../styling/about_page.css";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="about-container">
        {/* Snapshot */}
        <section className="about-section snapshot">
          <h1 className="section-header">At a Glance</h1>
          <ul className="snapshot-list">
            <li>🎓 B.S. in Computer Science</li>
            <li>📜 ISTQB Certified</li>
            <li>💻 10+ Programming Languages</li>
            <li>🌎 Fluent in English & Spanish</li>
            <li>🔧 Hands-on QA & IT troubleshooting</li>
          </ul>
        </section>

        {/* Professional Section */}
        <section className="about-section professional">
          <h1 className="section-header">Professional Profile</h1>
          <p className="section-text">
            I am a recent Computer Science graduate with a solid foundation in
            full-stack development and software testing. My experience spans
            game development, manual device testing, and electronics tinkering,
            making me a versatile and hands-on engineer.
          </p>

          <h2 className="sub-header">Technical Skills</h2>
          <ul className="skills-list">
            <li>
              <strong>Programming Languages:</strong> Python, Java, JavaScript,
              TypeScript, Kotlin, C, C++, C#, Swift, SQL, HTML5, CSS
            </li>
            <li>
              <strong>Software & Tools:</strong> ReactJS, NodeJS, Spring Boot,
              AWS, Azure, Docker, PowerBI, Git, Postman, Android Studio
            </li>
            <li>
              <strong>Manual & Electronics Skills:</strong> Device
              troubleshooting, soldering, QA testing, firmware updates
            </li>
          </ul>

          <h2 className="sub-header">Certifications & Languages</h2>
          <ul className="skills-list">
            <li>
              <strong>Certifications:</strong> ISTQB
            </li>
            <li>
              <strong>Languages:</strong> English (Fluent), Spanish (Fluent)
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1JcfBqGwGJ4QSYKdaH4xZdaFcad6uAIWL/view?usp=drive_link"
            download
            className="resume-button"
          >
            Download My Resume
          </a>
        </section>

        {/* Core Competencies */}
        <section className="about-section competencies">
          <h1 className="section-header">Core Competencies</h1>
          <ul className="skills-grid">
            <li>Software QA (Manual & Automated)</li>
            <li>Agile & Scrum Methodologies</li>
            <li>API Testing (Postman)</li>
            <li>Version Control (Git/GitHub)</li>
            <li>CI/CD Pipelines</li>
            <li>Database Management (SQL, MongoDB, MySQL)</li>
            <li>Cloud Platforms (AWS, Azure)</li>
            <li>IT Support & Troubleshooting</li>
            <li>UI/UX Fundamentals</li>
            <li>Full-Stack Web Development</li>
          </ul>
        </section>

        {/* Professional Values */}
        <section className="about-section values">
          <h1 className="section-header">Professional Values</h1>
          <ul className="values-list">
            <li>
              🤝 Collaborative — thrive in cross-functional and multicultural
              teams
            </li>
            <li>
              🛠️ Problem-Solver — approach challenges with creativity and
              precision
            </li>
            <li>⚡ Adaptable — quick to learn and apply new technologies</li>
            <li>
              ✅ Quality-Driven — dedicated to building reliable, user-focused
              software
            </li>
          </ul>
        </section>

        {/* Personal / Fun Section */}
        <section className="about-section personal">
          <h1 className="section-header">Personal Life & Hobbies</h1>
          <p className="section-text">
            Outside of programming, I love exploring the world and immersing
            myself in new cultures. Traveling fuels my creativity and curiosity,
            helping me approach problems with fresh perspectives.
          </p>
          <p className="section-text">
            I also enjoy tinkering with electronics, building small projects,
            and learning new hands-on skills. When I’m not coding or exploring,
            you can find me enjoying hobbies like gaming, birdwatching, or
            simply discovering interesting tech gadgets.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
