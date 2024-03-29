import React from 'react';
import { HeroSection } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <div className="hero-wrap">
        <h1 className="hero-title">
          Unlock your potential with the best
          <span className="hero-title-span">language</span>tutors
        </h1>
        <p className="hero-description">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>

        <a className="hero-btn" href="/teachers">
          Get started
        </a>
      </div>
      <div className="hero-photo">
        <img src="" alt="" />
      </div>
    </HeroSection>
  );
};

export default Hero;
