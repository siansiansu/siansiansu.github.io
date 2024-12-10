import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.css';

export function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <img
          src="@site/static/img/profile.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
      <h1 className={styles.name}>Soo bîn-hiân</h1>
      <p className={styles.title}>Tâi-uân lâng | Nature Lover | Software Engineer</p>

      <div className={styles.socialLinks}>
        <Link
          href="https://github.com/siansiansu"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </Link>
        <Link
          href="https://linkedin.com/in/minsian"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Link>
        <Link
          href="https://instagram.com/siansiansu"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </Link>
        <Link
          href="https://twitter.com/siansiansu"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </Link>
      </div>

      <div className={styles.bio}>
        <p>
          Passionate about building innovative solutions and sharing knowledge.
          I love creating open-source projects and writing about technology.
        </p>
      </div>

      <div className={styles.actionButtons}>
        <Link
          to="https://www.buymeacoffee.com/yourusername"
          className={styles.coffeeButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Support My Work
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.mainContent}>
        <HomepageHeader />
      </main>
    </Layout>
  );
}