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

    const pageData = zhejiangData.slice(0, 30);

    return (
      <div className={styles['g-main']}>
        <div className={styles['g-left']}>
          <div className={styles['m-kw']}>
            关键词：area:zhejiang&category:connection
          </div>
          <div className={styles['m-count']}>共搜索到 <span
            className={styles['m-count-inner']}>{count}</span> 条结果，
            每页显示30条
          </div>
          <SearchResultMap data={zhejiangData.slice(0, 450)}/>
        </div>
        <div className={styles['g-right']} onClick={this.handleClick}>
          {
            pageData.map(function (item, index) {
              return (
                <div key={index} className={styles['m-resultitem']}
                     data-obj={JSON.stringify(item)}>
                  <p><strong>{index + 1}: {item['callingGt']} 呼出</strong></p>
                  <span>中国-{item['province']} -&gt; {item['country']}-{item['capital']}</span>
                  <span
                    className={styles['m-counttag']}><strong>连接数：{item['amount']}</strong></span>
                </div>
              );
            })
          }
          <div className={styles['m-pages']}>
            <Pagination defaultCurrent={1} total={69}/>
          </div>
        </div>
      </div>
    );
  }
}

SearchResultPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
