const mongoose = require('mongoose');

const newsArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const NewsArticle = mongoose.model('NewsArticle', newsArticleSchema);

module.exports = NewsArticle;
```

This project includes a React frontend with a Node.js/Express backend and a MongoDB database. The frontend has a navigation menu with links to the home page, movies, celebrities, and news pages. Each page displays a list of items with a brief description. The backend serves the frontend and provides API endpoints for retrieving data from the database. The database has three models: Movie, Celebrity, and NewsArticle.