import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import styled from 'styled-components'
import Statistics from './views/Statistics'
import NoMatch from './views/NoMatch'
import Money from './views/Money'
import Tags from './views/Tags'
import { TagEdit } from './views/TagEdit'
import 'antd/es/message/style/index.css'

const AppWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <TagEdit />
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App




