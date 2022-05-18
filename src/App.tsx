import type { Component } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';
import { lazy } from 'solid-js';

const About = lazy(() => import('./pages/About'));
// import About from './pages/About';

import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/Header';
import Home from './pages/Home';

const App: Component = () => {
  return (
    <div>
      {/* <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <Link href="/about">About</Link>
      </header> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
