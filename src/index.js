import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';

import './styles/base.less';

const app = dva({
  history: createHistory()
});

// app.use({});

// app.model(require('./models/example').default);

app.router(require('./router').default);

app.start('#root');
