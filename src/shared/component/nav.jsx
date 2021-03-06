import React from 'react'
import { NavLink } from 'react-router-dom'

import LoginLink from '../container/login-link'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'

const Nav = () => {
  return (
    <nav>
      <ul>
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Async' },
          { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
        ].map((link) => {
          return (
            <li key={link.route}>
              <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
            </li>
          )
        })}
        <li>
          <LoginLink />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
