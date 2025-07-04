import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/celebrities">Celebrities</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;