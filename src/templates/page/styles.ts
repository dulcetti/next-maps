import styled from 'styled-components';

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: auto;
  max-width: var(--container);
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
  text-align: center;
`;

export const Body = styled.div`
  p {
    font-size: var(--medium);
    line-height: var(--medium);
    margin-bottom: var(--medium);
  }
`;
