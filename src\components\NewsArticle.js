import React from 'react';

function NewsArticle({ article }) {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default NewsArticle;
```

**Backend (Node.js/Express)**