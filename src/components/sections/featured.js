import React from 'react';
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
`;

const Featured = () => (
  <StyledProjectsSection>
    <h2 className="numbered-heading">Some Things I've Built</h2>
  </StyledProjectsSection>
);

export default Featured;
