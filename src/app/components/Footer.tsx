import * as React from 'react';
import styled from 'styled-components';
import { Container, Header } from './common';
import youtube from '../../assets/icons/youtube.svg';
import instagram from '../../assets/icons/instagram.svg';

const links: Array<{ icon: string; link: string }> = [
  { icon: youtube, link: 'https://www.youtube.com/@chperrone' },
  { icon: instagram, link: 'https://www.instagram.com/the_hello_stranger/' },
];

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  padding: 1em 0 1em 0;
`;

const SocialList = styled.ul`
  display: flex;
  margin: auto;

  li:not(:last-child) {
    margin-right: 0.5em;
  }
`;

const SocialLink = styled.li`
  width: 50px;
  height: 50px;
`;

const Navigation: React.FC = () => (
  <StyledFooter>
    <SocialList>
      {links.map(l => (
        <SocialLink>
          <a href={l.link} target="_blank" rel="noopener noreferrer">
            <img src={l.icon} />
          </a>
        </SocialLink>
      ))}
    </SocialList>
  </StyledFooter>
);

export default Navigation;
