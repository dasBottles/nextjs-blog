import React from 'react'
import Link from 'next/link'

const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

// Btn Event Handlers

darkBtn.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightBtn.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};




const Navbar = () => {

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link href='/'>
              <a className="nav-link">
                <span className="link-text logo-text">andrew.exe</span>
                <i className="fas fa-angle-double-right fa-primary" />
              </a>
            </Link>
            </li>

          <li className="nav-item">
            <Link href='/projects'>
              <a href="#" className="nav-link">
                <i className="fas fa-primary fa-flask fa-primary" />
                <span className="link-text">Projects</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-primary fa-coffee" />
              <span className="link-text">Contact</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-primary fa-glass-martini" />
              <span className="link-text">About Me</span>
            </a>
          </li>

          <li className="nav-item" id="themeButton">
            <a href="#" className="nav-link">
              <i className="fas fa-primary fa-moon" id='dark' />
              <i className="fas fa-sun fa-primary" id='light' />
              <span>Theme Toggle</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar


