import React from 'react';
import styles from '../styles/GlobalHeader.less';

const GlobalHeader = () => {
  return (
    <div className={styles['g-header']}>
      <div className={styles['m-logo']}>
        <img className={styles['m-inner']} src={require('../assets/gcnt-logo-full.png')} alt={"logo"}/>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
};

export default GlobalHeader;
