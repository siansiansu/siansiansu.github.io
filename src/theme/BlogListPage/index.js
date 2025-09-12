import React, {useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function AtlassianPagination({metadata, currentPage, onPageChange}) {
  const {totalPages} = metadata;
  const [inputPage, setInputPage] = useState(currentPage.toString());

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage);
    if (pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="atlassian-pagination">
      <div className="atlassian-pagination-content">
        <div className="atlassian-pagination-info">
          顯示第 {currentPage} 頁，共 {totalPages} 頁
        </div>

        <div className="atlassian-pagination-controls">
          {currentPage > 1 && (
            <Link
              to={currentPage === 2 ? metadata.blogBasePath : `${metadata.blogBasePath}page/${currentPage - 1}`}
              className="atlassian-pagination-button atlassian-pagination-prev"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              上一頁
            </Link>
          )}

          <div className="atlassian-pagination-numbers">
            {generatePageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <span key={index} className="atlassian-pagination-ellipsis">
                    ⋯
                  </span>
                );
              }

              const isActive = page === currentPage;
              const pageUrl = page === 1 ? metadata.blogBasePath : `${metadata.blogBasePath}page/${page}`;

              return (
                <Link
                  key={page}
                  to={pageUrl}
                  className={clsx('atlassian-pagination-number', {
                    'atlassian-pagination-number--active': isActive,
                  })}
                >
                  {page}
                </Link>
              );
            })}
          </div>

          {currentPage < totalPages && (
            <Link
              to={`${metadata.blogBasePath}page/${currentPage + 1}`}
              className="atlassian-pagination-button atlassian-pagination-next"
            >
              下一頁
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </Link>
          )}
        </div>

        <form onSubmit={handleInputSubmit} className="atlassian-pagination-jump">
          <label className="atlassian-jump-label">跳至頁面</label>
          <div className="atlassian-jump-controls">
            <input
              type="number"
              min="1"
              max={totalPages}
              value={inputPage}
              onChange={handleInputChange}
              className="atlassian-pagination-input"
              placeholder="頁碼"
            />
            <button type="submit" className="atlassian-pagination-jump-button">
              前往
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AtlassianBlogList({items, metadata}) {
  const currentPage = metadata.page || 1;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="atlassian-blog-container">
      {/* Header Section */}
      <div className="atlassian-blog-header">
        <h1 className="atlassian-blog-title">最近的文章</h1>
        <p className="atlassian-blog-description">
          探索技術世界：從賞鳥程式到系統架構，分享我的學習心得與實作經驗
        </p>
      </div>

      {/* Article List */}
      <div className="atlassian-articles-container">
        {items.map((item, index) => {
          const {content: BlogPostContent} = item;
          const {metadata: postMetadata, Preview} = BlogPostContent;
          const {title, permalink, date, tags, authors, readingTime} = postMetadata;

          return (
            <article key={permalink} className="atlassian-article-card">
              <div className="atlassian-article-content">
                <div className="atlassian-article-header">
                  <h2 className="atlassian-article-title">
                    <Link to={permalink} className="atlassian-title-link">
                      {title}
                    </Link>
                  </h2>
                  <div className="atlassian-article-meta">
                    <time dateTime={date} className="atlassian-date">
                      {formatDate(date)}
                    </time>
                    {authors && authors.length > 0 && (
                      <>
                        <span className="atlassian-meta-separator">·</span>
                        <span className="atlassian-author">
                          {authors[0].name}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {Preview && (
                  <div className="atlassian-article-excerpt">
                    <Preview />
                  </div>
                )}

                {tags && tags.length > 0 && (
                  <div className="atlassian-article-tags">
                    {tags.map((tag) => (
                      <Link
                        key={tag.permalink}
                        to={tag.permalink}
                        className="atlassian-tag"
                      >
                        {tag.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination */}
      <AtlassianPagination
        metadata={metadata}
        currentPage={currentPage}
        onPageChange={(page) => {
          const url = page === 1 ? metadata.blogBasePath : `${metadata.blogBasePath}page/${page}`;
          window.location.href = url;
        }}
      />
    </div>
  );
}

function BlogListPageContent(props) {
  const {metadata, items} = props;

  return (
    <Layout>
      <AtlassianBlogList items={items} metadata={metadata} />
    </Layout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
        'atlassian-blog-page'
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
