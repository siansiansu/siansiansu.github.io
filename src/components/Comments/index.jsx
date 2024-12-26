// src/components/Comments/index.jsx
import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function Comments() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    window.disqus_config = function () {
      this.page.identifier = window.location.pathname;
      this.page.url = window.location.href;

      this.callbacks.onReady = [function () {
        customizeDisqusStyles();
      }];
    };

    const script = document.createElement('script');
    script.src = 'https://alex-su.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    script.async = true;

    document.body.appendChild(script);

    function customizeDisqusStyles() {
      const customStyles = document.createElement('style');
      customStyles.setAttribute('data-disqus-styles', '');
      customStyles.textContent = `
        #disqus_thread {
          font-family: var(--ifm-font-family-base);
          max-width: 1080px;
          margin: 0 auto;
          padding: var(--ifm-spacing-horizontal);
        }

        .post-list .post {
          background: var(--ifm-background-surface-color);
          border-radius: var(--ifm-global-radius);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          margin-bottom: var(--ifm-spacing-vertical);
          padding: 20px;
        }

        .comment-btn,
        .vote-btn,
        .btn {
          background: var(--ifm-color-primary);
          border-radius: var(--ifm-button-border-radius);
          border: none;
          color: white;
          padding: 8px 16px;
          font-weight: var(--ifm-heading-font-weight);
          transition: all 0.2s ease;
        }

        .comment-btn:hover,
        .vote-btn:hover,
        .btn:hover {
          background: var(--ifm-color-primary-dark);
          transform: translateY(-2px);
        }

        .textarea {
          border-radius: var(--ifm-global-radius);
          border: 1px solid var(--ifm-color-gray-300);
          padding: 12px;
          font-size: var(--ifm-font-size-base);
          background: var(--ifm-background-color);
          color: var(--ifm-color-content);
        }

        .avatar img {
          border-radius: 50%;
        }

        .post-content {
          color: var(--ifm-color-content);
        }

        [data-theme='dark'] .post-list .post {
          background: var(--ifm-background-surface-color);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        [data-theme='dark'] .textarea {
          border-color: var(--ifm-color-gray-700);
        }

        #disqus_thread::before {
          content: '';
          display: block;
          width: 24px;
          height: 24px;
          margin: 20px auto;
          border: 3px solid var(--ifm-color-primary-lighter);
          border-radius: 50%;
          border-top-color: var(--ifm-color-primary);
          animation: loading 1s infinite linear;
        }

        @keyframes loading {
          to {
            transform: rotate(360deg);
          }
        }
      `;
      document.head.appendChild(customStyles);
    }

    return () => {
      document.body.removeChild(script);
      window.DISQUS = undefined;
      window.disqus_config = undefined;
      const customStyles = document.querySelector('style[data-disqus-styles]');
      if (customStyles) {
        customStyles.remove();
      }
    };
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsWrapper}>
        <div id="disqus_thread"></div>
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