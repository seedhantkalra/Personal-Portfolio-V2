import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .highlight {
    color: var(--green);
    font-weight: 600;
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: grayscale(100%) contrast(1);
        mix-blend-mode: multiply;
      }

      &:before {
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: transparent;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'C++'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Seedhant and I enjoy creating things that matter to people. I'm
              currently a second-year student at the University of Waterloo, pursuing a double major
              in{' '}
              <a
                href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management"
                target="_blank"
                rel="noreferrer"
              >
                <span className="highlight">Computer Science</span>{' '}
                <span className="highlight">and</span> <span className="highlight">Finance</span>
              </a>
              .
            </p>

            <p>
              Throughout my degree, I've had the privilege of working with a diverse range of
              organizations, including{' '}
              <a href="https://www.tournkey.com/" target="_blank" rel="noreferrer">
                <span className="highlight">a startup</span>
              </a>
              ,{' '}
              <a href="https://isigmasolutions.com/" target="_blank" rel="noreferrer">
                <span className="highlight">a small business</span>
              </a>
              ,{' '}
              <a href="https://occ.ca/" target="_blank" rel="noreferrer">
                <span className="highlight">a non-profit organization</span>
              </a>
              , and{' '}
              <a href="https://www.remitbee.com/" target="_blank" rel="noreferrer">
                <span className="highlight">a fintech company</span>
              </a>
              . Most recently, I've worked at{' '}
              <a href="https://www.shopify.com/ca" target="_blank" rel="noreferrer">
                <span className="highlight">Shopify</span>
              </a>{' '}
              where I helped build the future of commerce for millions of merchants.
            </p>

            <p>
              Wondering how I can contribute to your team? Take a look at my{' '}
              <a href="/#jobs">
                <span className="highlight">past experiences</span>
              </a>{' '}
              and{' '}
              <a href="/#projects">
                <span className="highlight">projects</span>
              </a>{' '}
              to see what I can bring to the table!
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
