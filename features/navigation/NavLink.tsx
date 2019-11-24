import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { Route } from './routes';

const ActiveLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 2px;
  text-decoration: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.font.color.default};
  &:hover {
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

const InactiveLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 2px;
  text-decoration: underline;
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.font.color.default};
`;

type NavLinkProps = {
  href: Route;
};
const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const { pathname } = useRouter();
  if (pathname === href) {
    return <InactiveLink>{children}</InactiveLink>;
  }

  return (
    <Link href={href}>
      <ActiveLink>{children}</ActiveLink>
    </Link>
  );
};

export default NavLink;
