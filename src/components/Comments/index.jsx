// src/components/Comments/index.jsx
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function Comments() {
  const { siteConfig } = useDocusaurusContext();

  const disqusConfig = {
    url: window.location.href,
    identifier: window.location.pathname,
    shortname: 'alex-su'
  };

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsWrapper}>
        <DiscussionEmbed {...disqusConfig} />
      </div>
    </div>
  );
}

export default function CommentsWrapper() {
  return (
    <BrowserOnly>
      {() => <Comments />}
    </BrowserOnly>
  );
}
