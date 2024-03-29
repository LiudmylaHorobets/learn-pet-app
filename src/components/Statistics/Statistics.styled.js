import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 100%;
  padding: 40px 0;

  border: 1.5;
  border-color: #e0a39a;
  border-style: dashed;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px 64px;
  }

  .statistics-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
    row-gap: 24px;

    color: #121417;
  }

  .statistics-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .statistics-number {
    font-size: 28px;
    font-weight: 500;

    &::after {
      content: '+';
      margin-left: 5px;
    }
  }

  .statistics-text {
    font-size: 14px;
    font-weight: 400;

    width: 96px;
    opacity: 0.7;
  }
`;
