import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactSection = styled.section`
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

const ContactText = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 2rem auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  background-color: #4ADE80;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Contato</SectionTitle>
      <ContactText>
        Para mais informações, entre em contato via WhatsApp ou me siga no Instagram.
      </ContactText>
      <ContactContainer>
        <ContactItem>
          <a href="https://wa.me/5541992885284" target="_blank" rel="noopener noreferrer">
            <IconContainer>
              <FaWhatsapp size={25} color="#121212" />
            </IconContainer>
            (41) 99288-5284
          </a>
        </ContactItem>
        <ContactItem>
          <a href="https://instagram.com/gustavo_gomesdacosta" target="_blank" rel="noopener noreferrer">
            <IconContainer>
              <FaInstagram size={25} color="#121212" />
            </IconContainer>
            @gustavo_gomesdacosta
          </a>
        </ContactItem>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
