import React from 'react';
import dynamic from 'dva/dynamic';
import PropTypes from 'prop-types'
import { Route, Router, Switch, Redirect } from 'dva/router';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';

function RouterConfig ({history, app}) {

  const commonModels = [require('./models/GlobalHeaderModel')];

  const routes = [
    {
      path: '/index',
      models: () => [...commonModels, require('./models/IndexModel')],
      component: () => require('./routes/IndexPage')
    },
    {
      path: '/relations',
      models: () => [...commonModels, require('./models/RelationModel')],
      component: () => require('./routes/RelationPage')
    },
    {
      path: '/search',
      models: () => [...commonModels, require('./models/RelationModel')],
      component: () => require('./routes/RelationPage')
    },
    {
      path: '/reveal-api',
      models: () => [...commonModels, require('./models/RelationModel')],
      component: () => require('./routes/RelationPage')
    },
    {
      path: '/help',
      models: () => [...commonModels, require('./models/RelationModel')],
      component: () => require('./routes/RelationPage')
    },
    {
      path: '/error',
      models: () => [...commonModels],
      component: () => require('./routes/ErrorPage')
    }
  ];

  return (
    <div>
      <GlobalHeader/>
      <Router history={history}>
        <Switch>
          <Route path={'/'} exact render={() => <Redirect to={'/index'} />} />
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
          <Route path={'/'} render={() => <Redirect to={'/error'} />} />
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
