import React from 'react'
import Link from 'next/link'

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
              <a className="nav-link">
                <i className="fas fa-primary fa-archive fa-primary" />
                <span className="link-text">Projects</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">
                <i className="fas fa-primary fa-envelope" />
                <span className="link-text">Contact</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
          <Link href="/about" >
            <a className="nav-link">
              <i className="fas fa-primary fa-edit" />
              <span className="link-text">About Me</span>
            </a>
          </Link>
          </li>

          <li className="nav-item" id="themeButton">
            <a href='#' className="nav-link">
              <i className="fas fa-primary fa-moon" id='dark' />
              <i className="fas fa-sun fa-primary" id='light' />
              <span className='link-text'>Theme Toggle</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar


