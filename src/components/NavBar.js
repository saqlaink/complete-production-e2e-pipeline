import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from '../assets/1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg';
import twitter from '../assets/img/twitter.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const click = () => {
    window.scrollTo(0, 870);
  };
  const click1 = () => {
    window.scrollTo(0, 2700);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === 'experience'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('experience');
                click();
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('skills');
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => {
                onUpdateActiveLink('projects');
                click1();
              }}
            >
              Projects
            </Nav.Link>
            {/* <Nav.Link
              href="#blog"
              className={
                activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => window.open('https://tarunchawla.hashnode.dev')}
            >
              Blog
            </Nav.Link> */}

            <Nav.Link
              href="#contact"
              className={
                activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            variant="primary"
            href="https://drive.google.com/drive/folders/1lguOBg_LfqhZF3HECJrakumPy9-AX8Io?usp=share_link"
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <a
              href="https://drive.google.com/drive/folders/1lguOBg_LfqhZF3HECJrakumPy9-AX8Io?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              &nbsp;Download CV
            </a>
          </Button>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/saqlainmkhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/saqlaink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.twitter.com/KhanSaqlain786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
