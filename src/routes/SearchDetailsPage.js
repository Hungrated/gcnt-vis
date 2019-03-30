import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import 'antd/lib/button/style';

import styles from '../styles/SearchDetailsPage.less';

import SearchResultMap from '../components/search/SearchDetailsMap';

class SearchDetailsPage extends PureComponent {

  render () {

    const data = JSON.parse(this.props.location.state.data) || {};

    return (
      <div className={styles['g-main']}>
        <div className={styles['g-upper']}>
          <SearchResultMap data={data}/>
          <Button type={'primary'} className={styles['m-export']}>导出报表</Button>
          <Button type={'primary'} className={styles['m-back']} onClick={() => {
            window.history.go(-1);
          }}>返 回</Button>
        </div>
        <div className={styles['g-lower']}>
          <div className={styles['g-aside']}>
            <h2><strong>连接信息</strong></h2>
            <p>连接数：{data['amount']}</p>
            <p>SSN：{data['ssn']}</p>
          </div>
          <div className={styles['g-left']}>
            <h2><strong>源信令点</strong></h2>
            <p>国家/地区：中国{data['province']}</p>
            <p>城市：{data['city']}</p>
            <p>源信令点GT码：{data['callingGt']}</p>
            <p>源信令点SSN码：{data['callingSsn']}</p>
            <p>地理位置纬度：{Number(data['src_lat']).toFixed(5)}</p>
            <p>地理位置经度：{Number(data['src_lon']).toFixed(5)}</p>
          </div>
          <div className={styles['g-right']}>
            <h2><strong>目的信令点</strong></h2>
            <p>国家/地区：{data['country']}</p>
            <p>城市：{data['capital']}</p>
            <p>源信令点GT码：{data['calledGt']}</p>
            <p>源信令点SSN码：{data['calledSsn']}</p>
            <p>地理位置纬度：{Number(data['dest_lat']).toFixed(5)}</p>
            <p>地理位置经度：{Number(data['dest_lon']).toFixed(5)}</p>
          </div>
        </div>
      </div>
    );
  }
}

SearchDetailsPage.propTypes = {};

export default connect()(SearchDetailsPage);
