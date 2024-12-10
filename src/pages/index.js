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
      <img
        src="/img/profile.jpg"
        alt="Profile"
        className={styles.profileImage}
      />
      <h1 className={styles.name}>Your Name</h1>
      <p className={styles.title}>Software Engineer | Technical Writer</p>

      <div className={styles.socialLinks}>
        <Link
          href="https://github.com/yourusername"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link
          href="https://instagram.com/yourusername"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          className={styles.socialIcon}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      </div>

      <div className={styles.actionButtons}>
        <Link
          to="https://www.buymeacoffee.com/yourusername"
          className={clsx('button button--outline button--secondary', styles.coffeeButton)}
        >
          Buy Me a Coffee
        </Link>
      </div>

      <div className={styles.bio}>
        <p>
          Passionate about building innovative solutions and sharing knowledge.
          I love creating open-source projects and writing about technology.
        </p>
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