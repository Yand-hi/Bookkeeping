import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from './components/Layout'

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App

function NoMatch() {
  return <h1>404 NotFound!</h1>
}

function Money() {
  return (
    <Layout>
      <h2>记一笔页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}
