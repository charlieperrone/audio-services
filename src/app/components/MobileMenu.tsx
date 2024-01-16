// MobileMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { DEFAULT_BREAKPOINTS } from 'react-bootstrap/esm/ThemeProvider';

const MobileMenuWrapper = styled.div`
  display: block;

  @media screen and (min-width: 'md') {
    display: none;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  padding: 15px;
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MobileMenuWrapper>
      <MenuIcon onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </MenuIcon>
      {menuOpen && (
        <MenuList>
          {/* Add your menu items or links here */}
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </MenuList>
      )}
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
