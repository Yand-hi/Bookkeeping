import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">记一笔</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App

function NoMatch() {
  return <p>404 NotFound!</p>
}

function Money() {
  return <h2>记一笔页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}
