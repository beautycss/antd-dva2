import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import Dynamic from 'dva/dynamic';
// import { getRouterConfig } from './common/router';
// console.log(getRouterConfig());

function RouterConfig({ history, app }) {
  const Home = Dynamic({
    app,
    component: () => import('./routes/Home/Home'),
  });
  const List = Dynamic({
    app,
    models: () => [import('./models/list')],
    component: () => import('./routes/List/List'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/list" component={List} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
