import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaServer, FaWindows, FaNetworkWired, FaLinux, FaPython } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { BsHddNetwork } from 'react-icons/bs';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #121212;
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

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIconContainer = styled.div`
  background-color: #4ADE80;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillContent = styled.div`
  padding: 1.5rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
`;

const Skills = () => {
  const skillsData = [
    {
      title: 'Automação em Python',
      description: 'Certificado pelo curso da Hashtag, com experiência em automação de processos e tarefas.',
      icon: <FaPython size={60} color="#121212" />
    },
    {
      title: 'Hardware',
      description: 'Conhecimento avançado em montagem, manutenção e solução de problemas em equipamentos.',
      icon: <FaHtml5 size={60} color="#121212" />
    },
    {
      title: 'Servidores',
      description: 'Experiência com configuração e manutenção de servidores para diferentes aplicações.',
      icon: <FaServer size={60} color="#121212" />
    },
    {
      title: 'Windows Server 2012',
      description: 'Especialista em configuração e administração de ambientes Windows Server.',
      icon: <FaWindows size={60} color="#121212" />
    },
    {
      title: 'CFTV',
      description: 'Instalação e configuração de sistemas de segurança e monitoramento por câmeras.',
      icon: <MdSecurity size={60} color="#121212" />
    },
    {
      title: 'Dispositivos Gerenciáveis',
      description: 'Configuração e manutenção de diversos dispositivos de rede e sistemas gerenciáveis.',
      icon: <BsHddNetwork size={60} color="#121212" />
    },
    {
      title: 'Redes',
      description: 'Implementação e manutenção de infraestruturas de rede corporativas e residenciais.',
      icon: <FaNetworkWired size={60} color="#121212" />
    },
    {
      title: 'Linux',
      description: 'Conhecimentos em Linux server e interface gráfica para diferentes aplicações.',
      icon: <FaLinux size={60} color="#121212" />
    }
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>Minhas Habilidades</SectionTitle>
      <SkillsContainer>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIconContainer>
              {skill.icon}
            </SkillIconContainer>
            <SkillContent>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillContent>
          </SkillCard>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
