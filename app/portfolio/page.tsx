import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.portfolioSection}>
      <h1>My Projects</h1>
      <div className={styles.projectCard}>
        <iframe src="https://dynamic-resume-builder-kappa.vercel.app/" title="Resume Builder"></iframe>
        <h3>Dynamic Resume Builder</h3>
      </div>
      <div className={styles.projectCard}>
        <iframe src="https://cats-facts-alpha.vercel.app/" title="Cats Facts"></iframe>
        <h3>Cats Facts</h3>
      </div>
      <div className={styles.projectCard}>
        <iframe src="https://number-guessing-game-five-theta.vercel.app/" title="Number Guessing Game"></iframe>
        <h3>Number Guessing Game</h3>
      </div>
    </div>
  );
}
