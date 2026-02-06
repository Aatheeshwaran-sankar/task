// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1 style={styles.title}>Hi, I'm Master 👨‍💻</h1>
        <p style={styles.subtitle}>Computer Science Student | Java Programmer | Web Developer</p>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I'm an engineering student passionate about coding, problem-solving, and building
          web applications. I love participating in contests and working on projects!
        </p>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>Java, C, Python</li>
          <li>HTML, CSS, JavaScript, React</li>
          <li>MySQL, PHP</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>✅ Automatic Solar Tracker using Arduino</li>
          <li>✅ Blockchain Credential Verification System</li>
          <li>✅ Portfolio Website with Node.js & MySQL</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>📧 Contact: your.email@example.com</p>
        <p>🌐 GitHub: github.com/yourusername</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: '#282c34',
    color: 'white',
    padding: '40px 20px',
  },
  title: {
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  section: {
    padding: '30px 20px',
    textAlign: 'left',
  },
  footer: {
    background: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
  },
};

export default App;
