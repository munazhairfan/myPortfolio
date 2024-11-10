import styles from './Contact.module.css';  // Import the styles from the CSS Module

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message:</label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            required
          />
        </div>

        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
