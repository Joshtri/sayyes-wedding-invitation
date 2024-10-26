import { Navbar } from 'flowbite-react';

const CustomNavbar = () => (
  <Navbar fluid={true} rounded={true}>
    <Navbar.Brand href="/">
      <span className="self-center whitespace-nowrap text-xl font-semibold">
        Say-Yes Invitation
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/" active={true}>Home</Navbar.Link>
      <Navbar.Link href="/features">Features</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
