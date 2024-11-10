import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Munazha Irfan. All rights reserved.</p>
        <p>
          <a href="https://github.com/munazha" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="mailto:munazha@example.com"> Email</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
