import React from 'react';
import './SoftwareSkills.scss';
import { skillsSection } from '../../portfolio';
import { styles } from '../../styles';
import emoji from 'react-easy-emoji';

export default function SoftwareSkill() {
  return (
    <div>
      <div
        className={styles.sectionSubText}
        style={{
          'padding-left': 0,
          'list-style': 'none',
          'font-size': '20px',
          'margin-bottom': '0px',
          'margin-top': '0px',
          'text-align': 'center',
        }}
      >
        What Skills I have as a
      </div>
      <div
        className={styles.sectionHeadText}
        style={{
          'padding-left': 0,
          'list-style': 'none',
          'font-size': '3.5rem',
          'margin-bottom': '20px',
          'margin-top': '0px',
          'text-align': 'center',
        }}
      >
        Software Engineer
      </div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((softwareSkills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={softwareSkills.skillName}
              >
                <i className={softwareSkills.fontAwesomeClassname}></i>
                <p>{softwareSkills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="skills-emoji">
        {emoji(
          'Experienced in developing and deploying applications on Azure using Docker, Kubernetes, and Jenkins for continuous integration and deployment.'
        )}
      </div>
      <div className="skills-emoji">
        {emoji(
          'Proficient in implementing DevOps and cloud-based solutions to streamline development, deployment, and management processes.'
        )}
      </div>
      <div className="skills-emoji">
        {emoji(
          'Proficient in React and JavaScript, with a strong background in developing sophisticated web applications using React and leveraging JavaScript for front-end and back-end development. Experienced in crafting complex user interfaces and responsive web designs'
        )}
      </div>
    </div>
  );
}
