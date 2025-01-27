import React from 'react';
import '../../styling/SkillsValues.css';

function SkillsValues() {
  return (
    <div className="skills-values-section">
      <h2 className="section-header">Skills & Values</h2>

      <div className="skills-section">
        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>

      <div className="values-section">
        <h3>Core Values</h3>
        <ul className="values-list">
          <li>Perseverance</li>
          <li>Collaboration</li>
          <li>Adaptability</li>
          <li>Creativity</li>

        </ul>
      </div>

      <div className="languages-section">
        <h3>Languages</h3>
        <p>English: Fluent</p>
        <p>Spanish: Fluent</p>
        <p>Japanese: Learning</p>
      </div>
    </div>
  );
}

export default SkillsValues;
