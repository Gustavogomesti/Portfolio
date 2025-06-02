import React from 'react';
import styled from 'styled-components';
import { FaHandPaper } from 'react-icons/fa';

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  background-color: #121212;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    text-align: center;
    height: auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

const Greeting = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  color: #4ADE80;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HandIcon = styled(FaHandPaper)`
  margin-left: 1rem;
  animation: wave 2s infinite;
  transform-origin: 70% 70%;
  
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`;

const Profession = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background-color: #4ADE80;
    color: #121212;
    
    &:hover {
      background-color: #3cbe6c;
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #4ADE80;
    
    &:hover {
      background-color: rgba(74, 222, 128, 0.1);
    }
  }
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <HomeContent>
        <TextContent>
          <Greeting>Olá, eu sou</Greeting>
          <Name>
            Gustavo Gomes
            <HandIcon size={40} />
          </Name>
          <Profession>Analista de Sistemas</Profession>
          <ButtonContainer>
            <Button href="#contact" className="primary">Contato</Button>
            <Button href="#about" className="secondary">Sobre Mim</Button>
          </ButtonContainer>
        </TextContent>
      </HomeContent>
    </HomeSection>
  );
};

export default Home;
