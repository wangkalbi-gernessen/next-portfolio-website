import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
// import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
  return (
    <div className="app">
      {/* <Router> */}
        <Navbar />
        <Main />
        <Projects />
        <Career />
        <Skills />
        <Footer />
      {/* </Router> */}
    </div>
  )
}