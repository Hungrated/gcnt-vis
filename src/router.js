import React from 'react';
import dynamic from 'dva/dynamic';
import PropTypes from 'prop-types';
import { Redirect, Route, Router, Switch } from 'dva/router';
import GlobalHeader from './components/common/GlobalHeader';
import GlobalFooter from './components/common/GlobalFooter';

function RouterConfig ({history, app}) {

  const commonModels = [require('./models/GlobalHeaderModel')];

  const routes = [
    {
      path: '/overview',
      models: () => [...commonModels, require('./models/OverviewModel')],
      component: () => require('./routes/OverviewPage')
    },
    {
      path: '/statistics',
      models: () => [...commonModels, require('./models/StatisticsModel')],
      component: () => require('./routes/StatisticsPage')
    },
    {
      path: '/search',
      models: () => [...commonModels, require('./models/SearchModel')],
      component: () => require('./routes/SearchPage')
    },
    {
      path: '/searchresult',
      models: () => [...commonModels],
      component: () => require('./routes/SearchResultPage')
    },
    {
      path: '/searchdetails',
      models: () => [...commonModels],
      component: () => require('./routes/SearchDetailsPage')
    },
    {
      path: '/error',
      models: () => [...commonModels],
      component: () => require('./routes/ErrorPage')
    }
  ];

  return (
    <div className={'g-root'}>
      <GlobalHeader/>
      <Router history={history}>
        <Switch>
          <Route path={'/'} exact render={() => <Redirect to={'/overview'}/>}/>
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
          <Route path={'/'} render={() => <Redirect to={'/error'}/>}/>
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
