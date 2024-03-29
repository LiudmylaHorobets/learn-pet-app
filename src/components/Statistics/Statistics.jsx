import React from 'react';
import { StatisticsSection } from './Statistics.styled';

const Statistics = () => {
  return (
    <StatisticsSection>
      <ul className="statistics-list">
        <li className="statistics-item">
          <span className="statistics-number">32,000</span>
          <span className="statistics-text">Experienced tutors</span>
        </li>
        <li className="statistics-item">
          <span className="statistics-number">300,000</span>
          <span className="statistics-text">5-star tutor reviews</span>
        </li>
        <li className="statistics-item">
          <span className="statistics-number">120</span>
          <span className="statistics-text">Subjects taught</span>
        </li>
        <li className="statistics-item">
          <span className="statistics-number">200</span>
          <span className="statistics-text">Tutor nationalities</span>
        </li>
      </ul>
    </StatisticsSection>
  );
};

export default Statistics;
