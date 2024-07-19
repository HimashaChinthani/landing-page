import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import styled from 'styled-components';

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Nav theme={theme}>
      <Logo src="logo.png" alt="Logo" /> {}
      <NavLinks>
        <StyledNavLink to="/" activeClassName="active"><b>Home</b></StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active"><b>About</b></StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="active"><b>Contact Us</b></StyledNavLink>
        <StyledNavLink to="/ShopNow" activeClassName="active"><b>Shop Now</b></StyledNavLink>
        

      </NavLinks>
      <ThemeToggle onClick={toggleTheme}>{theme === 'light' ? 'Dark mode' : 'Light mode'}</ThemeToggle>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => (theme === 'light' ? '#f8f9fa' : '#343a40')};
  color: ${({ theme }) => (theme === 'light' ? '#212529' : '#f8f9fa')};
  font-size: 18px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => (theme === 'light' ? '#0000FF' : '#0056b3')}; /* Dark blue color */
  text-decoration: none;
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => (theme === 'light' ? '#0056b3' : '#21a1f1')}; /* Dark blue for active link */
  }
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-right: 1rem;
`;

const ThemeToggle = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#0047AB')}; /* Dark blue color */
  color: ${({ theme }) => (theme === 'light' ? '#f8f9fa' : '#212529')};
  border: none;
  border-radius: 4px;
  margin-left: 1rem;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#0056b3' : '#21a1f1')};
  }
`;

export default NavBar;

