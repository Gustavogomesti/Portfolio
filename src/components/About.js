import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #1a1a1a;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #4ADE80, #22c55e);
  }
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>Sobre Mim</SectionTitle>
      <AboutContainer>
        <AboutText>
          Sou um entusiasta da Tecnologia desde a minha infância. Essa paixão me impulsionou a me tornar um analista de desenvolvimento de sistemas.
        </AboutText>
        <AboutText>
          Com a experiência de desenvolver sistemas, busco sempre entregar a melhor solução para cada requisição. Meu objetivo é combinar criatividade e habilidades técnicas para criar soluções eficientes e inovadoras.
        </AboutText>
        <AboutText>
          Minha dedicação em me aperfeiçoar constantemente é evidente em cada projeto que entrego. Tenho um compromisso com a excelência e estou sempre em busca de novos conhecimentos e desafios.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
