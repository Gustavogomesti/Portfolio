import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #121212;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  
  span {
    color: #4ADE80;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    background-color: #121212;
    width: 100%;
    height: 100vh;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: 0.3s ease-in-out;
    padding-top: 4rem;
    text-align: center;
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4ADE80;
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const CloseIcon = styled.div`
  display: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        Portfólio <span>Gustavo</span>
      </Logo>
      
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      
      <NavMenu isOpen={isMenuOpen}>
        <CloseIcon onClick={toggleMenu}>
          <FaTimes />
        </CloseIcon>
        <NavItem href="#home">Início</NavItem>
        <NavItem href="#about">Sobre Mim</NavItem>
        <NavItem href="#skills">Habilidades</NavItem>
        <NavItem href="#contact">Contato</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
