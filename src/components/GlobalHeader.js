import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';
import 'antd/lib/menu/style';
import styles from '../styles/GlobalHeader.less';

const mapStateToProps = ({header}) => ({
  header
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    header: {
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
  }
});

const navItems = [
  {
    tlt: 'HOME',
    link: '/home'
  },
  {
    tlt: 'RELATIONS',
    link: '/relations'
  },
  {
    tlt: 'SEARCH',
    link: '/search'
  },
  {
    tlt: 'REVEAL-API',
    link: '/reveal-api'
  },
  {
    tlt: 'HELP',
    link: '/help'
  }
];


class GlobalHeader extends PureComponent {

  state = {
    current: window.location.pathname.substring(1).toUpperCase() || 'HOME'
  };

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
    this.props.dispatcher.header.redirect({
      link: e.item.props.link,
      params: {}
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
                <Menu.Item key={tlt} link={link}>
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

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
;
