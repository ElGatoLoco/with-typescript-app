import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
`;
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.li`
  flex: 1;
`;

const Navbar = () => (
  <Nav>
    <List>
      <Item>
        <NavLink href="/">Home</NavLink>
      </Item>
      <Item>
        <NavLink href="/something">Something</NavLink>
      </Item>
      <Item>
        <NavLink href="/about">About</NavLink>
      </Item>
    </List>
  </Nav>
);

export default Navbar;
