import React from 'react';
import { Link } from 'react-router-dom'

import TopNav from "./top-nav";

import './header.css'

export default function Header(props) {
  return (
    <React.Fragment>
      <header role="banner">
        <div>
          <Link to="/">FlashFluent</Link>
        </div>
        <TopNav />
      </header>
    </React.Fragment>
  )
}
