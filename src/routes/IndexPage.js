import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.scss';

function IndexPage() {
  return (
    <div className={styles['g-main']}>
      GCNT-Vis: Visualization and analysis of global core network topology information.
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
