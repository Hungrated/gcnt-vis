import React from 'react';
import dynamic from 'dva/dynamic';
import PropTypes from 'prop-types'
import { Route, Router, Switch } from 'dva/router';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';

function RouterConfig ({history, app}) {

  // const error = dynamic({
  //   app,
  //   component: () => import('./routes/ErrorPage')
  // });

  const routes = [
    {
      path: '/',
      models: () => [require('./models/IndexModel')],
      component: () => require('./routes/IndexPage')
    },
    {
      path: '/index',
      models: () => [require('./models/IndexModel')],
      component: () => require('./routes/IndexPage')
    },
    {
      path: '/relation',
      models: () => [require('./models/RelationModel')],
      component: () => require('./routes/RelationPage')
    }
  ];

  return (
    <div>
      <GlobalHeader/>
      <Router history={history}>
        <Switch>
          {
            routes.map(({path, ...dynamics}, key) => (
              <Route key={key}
                     exact
                     path={path}
                     component={dynamic({
                       app,
                       ...dynamics
                     })}
              />
            ))
          }
        </Switch>
      </Router>
      <GlobalFooter/>
    </div>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default RouterConfig;
