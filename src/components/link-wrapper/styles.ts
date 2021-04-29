import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--highlight);
  cursor: pointer;
  position: fixed;
  right: var(--medium);
  top: var(--medium);
  z-index: 1100;

  &:hover {
    svg {
      color: var(--highlightOn);
    }
  }

  svg {
    transition: color 0.25s ease-in-out;
  }
`;
