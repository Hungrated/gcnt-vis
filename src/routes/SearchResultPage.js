import React, { PureComponent } from 'react';
import { connect } from 'dva';

import { Pagination } from 'antd';

import 'antd/lib/pagination/style';
import styles from '../styles/SearchResultPage.less';

import SearchResultMap from '../components/search/SearchResultMap';

const mapStateToProps = ({searchresult}) => ({
  searchresult
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    searchresult: {
      fetch: payload => dispatch({type: 'searchresult/fetch', payload}),
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
  }
});

class SearchResultPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.searchresult.fetch();
  }

  handleClick = (e) => {
    console.log(e.target.getAttribute('data-obj'));
    this.togglePageRedirect('/searchdetails',
      e.target.getAttribute('data-obj'));
  };

  togglePageRedirect = (link, value) => {
    this.props.dispatcher.searchresult.redirect({
      link: link,
      params: {
        data: value
      }
    });
  };

  render () {

    const {searchresult: {data}} = this.props;

    const zhejiangData = data['zhejiang_global_conn_info'] || [];

    const count = zhejiangData.length;

    const pageData = zhejiangData.slice(0, 20);

    return (
      <div className={styles['g-main']}>
        <div className={styles['g-left']}>
          <div className={styles['m-count']}>共找到 <span
            className={styles['m-count-inner']}>{count}</span> 条结果
          </div>
          <SearchResultMap data={null}/>
        </div>
        <div className={styles['g-right']} onClick={this.handleClick}>
          {
            pageData.map(function (item, index) {
              return (
                <div key={index} className={styles['m-resultitem']}
                     data-obj={JSON.stringify(data)}>
                  <h2><strong>源信令点</strong></h2>
                  <p>国家/地区：中国{item['province']}</p>
                  <p>城市：{item['city']}</p>
                  <p>源信令点GT码：{item['callingGt']}</p>
                  <p>源信令点SSN码：{item['callingSsn']}</p>
                  <p>地理位置经度：{item['src_lat']}</p>
                  <p>地理位置纬度：{item['src_lon']}</p>
                </div>
              );
            })
          }
          <div className={styles['m-pages']}>
            <Pagination defaultCurrent={1} total={103}/>
          </div>
        </div>
      </div>
    );
  }
}

SearchResultPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
// export default connect()(SearchResultPage);
