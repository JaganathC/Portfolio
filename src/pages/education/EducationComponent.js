import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Educations from '../../containers/education/Educations';
import Certifications from '../../containers/certifications/Certifications';
import EducationImg from './EducationImg';
import './EducationComponent.css';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="main">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
  className="experience-header-detail-text subTitle"
  style={{ color: theme.secondaryText }}
>
  I actively participate in hackathons 🧠💻, technical events 🚀, and workshops 🏫🔧, always striving to stay ahead in the tech landscape. Alongside my hands-on experience, I have maintained strong academic excellence with a CGPA of 9.33 🎓📚. I&apos;ve also earned several major certifications that showcase my passion for continuous learning and growth in the world of technology 🌟
</p>

            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

Education.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func
};
export default Education;
