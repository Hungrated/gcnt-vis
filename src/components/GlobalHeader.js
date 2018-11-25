import React from 'react';
import styles from '../styles/GlobalHeader.less';

const navItems = [
  {
    tlt: 'INDEX',
    link: '/'
  },
  {
    tlt: 'RELATIONS',
    link: '/relations'
  },
  {
    tlt: 'REVEAL API',
    link: '/'
  },
  {
    tlt: 'HELP',
    link: '/'
  }
];

const GlobalHeader = ({history}) => {
  return (
    <div className={styles['g-header']}>
      <div className={styles['m-logo']}>
        <img className={styles['inner']}
             src={require('../assets/gcnt-logo-full.png')} alt={'logo'}/>
      </div>
      <div className={styles['m-nav']}>
        {
          navItems.map(({tlt, link}, key) => (
            <span key={key}
                  className={styles['item']}
                  onClick={() => {window.location.href = `http://localhost:9001${link}`;}}>
              <strong>{tlt}</strong>
            </span>
          ))
        }
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {};

export default GlobalHeader;
