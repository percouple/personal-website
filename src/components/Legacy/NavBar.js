import React from "react";
import Home from '../Home';
import About from '../Footers/Connect';
import Thoughts from './Thoughts';
import Projects from '../Projects';
import styled from 'styled-components';
// import { blogData } from "../data/blog-data";
import { BrowserRouter as Link, Routes, Route } from 'react-router-dom';

const Stylebar = styled.nav`
display: flex;
justify-content: space-around;
color: white;
background-color: #1D90AE;

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
}
`

export default function NavBar() {

  return (
    <nav>
      <Stylebar>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/projects">Projects</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
        <Link to="/thoughts">Thoughts</Link>&nbsp;
      </Stylebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </nav >
  )
}
