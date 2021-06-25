import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        
        <LinkColumn>
          <LinkTitle> Email
          </LinkTitle>
          <LinkItem href='mailto:tttn.tn13@gmail.com'>tttn.tn13@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href='https://github.com/tttn13'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons target="_blank" href='https://www.linkedin.com/in/thi-nguyen-1310'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
