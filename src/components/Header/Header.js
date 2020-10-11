import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #273c75;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
`;

const Logo = styled.img`
  height: 90px;
  pointer-events: none;
`;
const Header = () => (

  <HeaderWrapper>
    <Logo src={`https://robohash.org/15?size=200x200`} alt='logo' />
    <h1>REACT ROBO PWA APP!</h1>
  </HeaderWrapper>

);

export default Header;