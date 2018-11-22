import React from 'react';
import { connect } from 'dva';
// import styles from '../styles/ErrorPage.less';

function ErrorPage () {
  return (
    <div>
      Error
    </div>
  );
}

ErrorPage.propTypes = {};

export default connect()(ErrorPage);
