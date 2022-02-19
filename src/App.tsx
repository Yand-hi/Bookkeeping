import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  border: 1px solid #002af7;

  ul {
    display: flex;

    li {
      padding: 16px;
      width: 33.33333333%;
      text-align: center;
    }
  }
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
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
        </Nav>

      </Wrapper>
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
