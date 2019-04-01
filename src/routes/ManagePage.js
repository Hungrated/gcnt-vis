import React, { PureComponent } from 'react';

import { Button } from 'antd';
import 'antd/lib/button/style';

import styles from '../styles/ManagePage.less';

class ManagePage extends PureComponent {

  state = {
    userList: [
      {name: 'user1'},
      {name: 'user2'},
      {name: 'user3'},
      {name: 'user4'},
      {name: 'user5'}
    ]
  };

  render () {
    return (
      <div className={styles['g-main']}>
        <div className={styles['g-header']}>
          <strong className={styles['m-title']}>
            用户管理
          </strong>
          <Button type={'primary'} className={styles['m-add']}>
            新增用户
          </Button>
        </div>
        <div className={styles['g-list']}>
          {
            this.state.userList.map(function (item, index) {
              return (
                <div key={index} className={styles['m-listitem']}>
                  <strong className={styles['m-name']}>
                    {item.name}
                  </strong>
                  <span className={styles['m-buttons']}>
                    <Button type={'primary'} size={'small'}
                            className={styles['m-button']}>
                      冻结
                    </Button>
                    <Button type={'primary'} size={'small'}
                            className={styles['m-button']}>
                      封禁
                    </Button>
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

ManagePage.propTypes = {};

export default ManagePage;
