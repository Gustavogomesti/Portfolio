import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #121212;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #333;
`;

const FooterText = styled.p`
  color: #999;
  font-size: 0.9rem;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4ADE80;
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLink href="#home">Início</FooterLink>
        <FooterLink href="#about">Sobre Mim</FooterLink>
        <FooterLink href="#skills">Habilidades</FooterLink>
        <FooterLink href="#contact">Contato</FooterLink>
      </FooterNav>
      <FooterText>© {currentYear} Gustavo Gomes. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
