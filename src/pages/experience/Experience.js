import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
import './Experience.css';
import { experience } from '../../portfolio.js';
import { Fade } from 'react-awesome-reveal';
import ExperienceImg from './ExperienceImg';
import Skills from '../../containers/skills/Skills';
import PropTypes from 'prop-types';

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1 className="experience-heading-text" style={{ color: theme.text }}>
                {experience.title}
              </h1>
              <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
                {experience['subtitle']}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}>
                {experience['description']}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience['sections']} theme={theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

Experience.propTypes = {
  theme: PropTypes.object,
  setTheme: PropTypes.func,
  onToggle: PropTypes.func
};
export default Experience;