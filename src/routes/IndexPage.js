import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.less';

import IndexMap from '../components/IndexMap';

function IndexPage () {
  return (
    <div className={styles['g-main']}>
      <IndexMap/>
      <p className={styles['m-slogan']}>GCNT-Vis: Visualization and analysis of global core network topology
        information.</p>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
