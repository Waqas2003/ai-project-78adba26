import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Celebrities from './pages/Celebrities';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/celebrities" component={Celebrities} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;