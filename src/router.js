import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';

function RouterConfig({ history }) {
  return (
    <div>
      <GlobalHeader/>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
          <Route path="/index" exact component={IndexPage} />
        </Switch>
      </Router>
      <GlobalFooter/>
    </div>
  );
}

export default RouterConfig;
