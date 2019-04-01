import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Menu, Modal } from 'antd';
import 'antd/lib/menu/style';
import 'antd/lib/button/style';
import 'antd/lib/modal/style';
import styles from '../../styles/GlobalHeader.less';

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
    key: 'overview',
    tlt: '总 览',
    link: '/overview'
  },
  {
    key: 'statistics',
    tlt: '统 计',
    link: '/statistics'
  },
  {
    key: 'search',
    tlt: '搜 索',
    link: '/search'
  },
  {
    key: 'reveal-api',
    tlt: '查看 API',
    link: 'https://github.com/Hungrated/gcnt-vis'
  },
  {
    key: 'help',
    tlt: '帮 助',
    link: 'https://github.com/Hungrated/gcnt-vis'
  }
];

class GlobalHeader extends PureComponent {

  state = {
    current: window.location.pathname.substring(1) || 'overview',
    modalVisible: false,
    isLogin: false
  };

  togglePageRedirect = (key, link) => {
    this.setState({
      current: key
    });
    this.props.dispatcher.header.redirect({
      link: link,
      params: {}
    });
  };

  handleClick = (e) => {
    const link = e.item.props.link;
    if ((/^(http|https):\/\//).test(link)) {
      window.open(link);
    } else {
      this.togglePageRedirect(e.key, link);
    }
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleLogin = (e) => {
    this.setState({
      isLogin: true,
      modalVisible: false
    });
  };

  handleLogout = (e) => {
    this.setState({
      isLogin: false,
      modalVisible: false
    });
  };

  handleCancel = (e) => {
    this.setState({
      modalVisible: false
    });
  };

  render () {
    return (
      <div className={styles['g-header']}>
        <div className={styles['m-logo']}>
          <img className={styles['inner']}
               src={require('../../assets/gcnt-logo-full.png')}
               alt={'logo'}/>
        </div>
        <div className={styles['m-nav']}>
          <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                theme={'dark'}
                mode={'horizontal'}
          >
            {
              navItems.map(({key, tlt, link}) => (
                <Menu.Item key={key} link={link}>
                  <strong>{tlt}</strong>
                </Menu.Item>
              ))
            }
          </Menu>
        </div>
        <div className={styles['m-manage']}>
          <Button type={'primary'}>管 理</Button>
        </div>
        <div className={styles['m-login']}>
          {
            this.state.isLogin
              ? (<Button type={'primary'} onClick={this.handleLogout}>注销
                admin</Button>)
              : (<Button type={'primary'} onClick={this.showModal}>登 录</Button>)
          }
        </div>
        <Modal
          title="登录系统"
          visible={this.state.modalVisible}
          onOk={this.handleLogin}
          onCancel={this.handleCancel}
        >
          用户名：
          <input />&emsp;
          口令：
          <input />
        </Modal>
      </div>
    );
  }
}

GlobalHeader.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);

