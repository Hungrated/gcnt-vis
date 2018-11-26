import React from 'react';
import { connect } from 'dva';
import styles from '../styles/ErrorPage.less';

function ErrorPage () {
  return (
    <div className={styles['g-main']}>
      <img className={styles['m-img']}
           src={require('../assets/gcnt-logo-s.png')} alt={'logo'}/>
      <p className={styles['m-tlt']}>Oops, the page you request is
        missing...</p>
      <p className={styles['m-subtlt']}>Please try again.</p>
    </div>
  );
}

ErrorPage.propTypes = {};

export default connect()(ErrorPage);
