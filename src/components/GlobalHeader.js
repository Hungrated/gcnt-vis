import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import 'antd/lib/menu/style';
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

class GlobalHeader extends PureComponent {

  state = {
    current: 'INDEX'
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render () {
    return (
      <div className={styles['g-header']}>
        <div className={styles['m-logo']}>
          <img className={styles['inner']}
               src={require('../assets/gcnt-logo-full.png')} alt={'logo'}/>
        </div>
        <div className={styles['m-nav']}>
          <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                theme={'dark'}
                mode={'horizontal'}
          >
            {
              navItems.map(({tlt, link}) => (
                <Menu.Item key={tlt}>
                  <strong>{tlt}</strong>
                </Menu.Item>
              ))
            }
          </Menu>
        </div>
      </div>
    );
  }
}

GlobalHeader.propTypes = {};

export default GlobalHeader;
