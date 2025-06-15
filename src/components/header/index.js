"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./header.module.css"
import { usePathname } from 'next/navigation';



export default function Header() {
   const currentPath= usePathname()
  return (
    <>
          <Navbar style={{ backgroundColor: "var(--primary)" }} variant="dark">
              <Container>
      <Navbar.Brand href="#home">MyApp</Navbar.Brand>
      <Nav className={` m-auto ${styles.link}`}>
      <Link href="/" className={(currentPath == '/' ? styles.active : '')}>Home</Link>
      <Link href="/about" className={(currentPath=='/about'? styles.active : '')}>About</Link>
      <Link href="/users" className={(currentPath=='/users'? styles.active : '')}>Users</Link>
        <Link href="/contact" className={(currentPath=='/contact'? styles.active : '')}>Contact</Link>
        <Link href="/login" className={(currentPath=='/login'? styles.active : '')}>Login</Link>
      </Nav>
    </Container>
  </Navbar>
  </>

  )
}