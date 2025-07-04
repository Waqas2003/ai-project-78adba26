import React from 'react';
import NewsArticle from '../components/NewsArticle';

function News() {
  const newsArticles = [
    { id: 1, title: 'News Article 1', content: 'Content 1' },
    { id: 2, title: 'News Article 2', content: 'Content 2' },
    { id: 3, title: 'News Article 3', content: 'Content 3' },
  ];

  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsArticles.map((article) => (
          <li key={article.id}>
            <NewsArticle article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;