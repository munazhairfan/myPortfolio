import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p>
          I&apos;m Munazha Irfan, a Computer Science student at Virtual University of Pakistan. I&apos;m currently honing my skills at the Governor House IT Program, with a passion for coding and creativity.
        </p>
        <h2>Education</h2>
        <ul>
          <li>ADP (Computer Science) - Virtual University</li>
          <li>Governor Sindh Initiative for GenAI Web3 and Metaverse</li>
          <li>Intermediate - Usman Allah Wala Women&apos;s College (Jun 2023)</li>
          <li>Matriculation - Usman Allah Wala JPSD Board (Jul 2021)</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML / CSS</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  );
}
