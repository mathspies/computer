// Main navigation bar

import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import ROUTES from './AppRouteNames';

const activeClass = (isActive: boolean) =>
  `nav-link ${isActive ? 'active' : ''}`;

// EXAMPLE: Navigation bar
const AppNavBar = (): ReactElement => (
  <nav>
    <Nav>
      <Nav.Item>
        <NavLink
          className={({ isActive }) => activeClass(isActive)}
          to={ROUTES.HOME}
          //  style={({ isActive }) => (isActive ? {textDecoration: 'underline'} : undefined)}
        >
          Home
        </NavLink>
      </Nav.Item>
    </Nav>
  </nav>
);

export default AppNavBar;
