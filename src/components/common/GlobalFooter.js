import React from 'react';
import styles from '../../styles/GlobalFooter.less';

const GlobalFooter = () => {
  return (
    <div className={styles['g-footer']}>
      Copyright © 2018 World Wide Vision, Zhejiang University, all rights
      reserved.
    </div>
  );
};

GlobalFooter.propTypes = {};

export default GlobalFooter;
