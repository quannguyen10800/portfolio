import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href="+1(514)-983-1008">+1(514)-983-1008</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="gmail.com">bibonguyen14@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Let's build something amazing together!
          </Slogan>
        </CompanyContainer>
    <SocialContainer>
      <SocialIcons href = "https://github.com/quannguyen10800?tab=repositories">
          <AiFillGithub size= "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://linkedin.com">
          <AiFillLinkedin size= "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.facebook.com">
          <AiFillFacebook size= "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.instagram.com">
          <AiFillInstagram size= "3rem"/>
      </SocialIcons>
    </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
