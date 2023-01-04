import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/add">Add People</Route>
          <Route path="/">
            <TinderCards />
            <PostCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
