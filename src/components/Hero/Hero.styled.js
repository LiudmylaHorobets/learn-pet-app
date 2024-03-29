import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  width: 100%;

  margin-bottom: 24px;

  .hero-wrap {
    padding: 98px 64px;
    background-color: #f8f8f8;
    border-radius: 30px;

    width: 100%;
    max-width: 720px;
  }

  .hero-title {
    margin-bottom: 32px;
    font-size: 48px;
    font-weight: 500;
    color: #121417;
  }
  .hero-title-span {
    display: inline-flex;
    font-style: italic;
    font-weight: 400;
    padding: 0 8px;
    background-image: url('../images/title-background-language.png');
    /* background-position: center bottom 6px; */
    /* background-repeat: no-repeat; */
  }

  .hero-description {
    margin-bottom: 64px;
    max-width: 471px;
  }

  .hero-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 267px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    color: #121417;
    background-color: #e0a39a;

    &:hover,
    &:active {
      color: #e0a39a;
      background-color: #121417;
    }
  }

  .hero-photo {
    display: flex;
    flex: 1;

    max-width: 568px;
    background-color: #dcaea0;
    border-radius: 30px;
  }
`;
