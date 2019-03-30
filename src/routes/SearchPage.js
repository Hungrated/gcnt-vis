import React, { PureComponent } from 'react';
import { connect } from 'dva';

import {Input} from 'antd';
import 'antd/lib/input/style';

import styles from '../styles/SearchPage.less';

const Search = Input.Search;
const mapStateToProps = ({search}) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    search: {
      fetch: payload => dispatch({type: 'search/fetch', payload}),
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
  }
});

class SearchPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.search.fetch();
  }

  togglePageRedirect = (link, value) => {
    this.props.dispatcher.search.redirect({
      link: link,
      params: {
        value: value
      }
    });
  };

  render () {
    // const {search: {data}} = this.props;
    return (
      <div className={styles['g-main']}>
        <div className={styles['m-bg']}>
          <video autoPlay={true}
                 muted={true}
                 loop={true}
                 src={require('../assets/search-bg.mp4')}
          />
        </div>
        <div className={styles['m-cover']}/>
        <div className={styles['m-search']}>
          <div className={styles['m-input']}>
            <Search
              placeholder="请输入搜索条件"
              enterButton=" 搜  索 "
              size="large"
              onSearch={value => this.togglePageRedirect('/searchresult', value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
