import React, { PureComponent } from 'react';
import { connect } from 'dva';

import SearchChart from '../components/statistics/RelationChart';
import styles from '../styles/SearchPage.less';

const mapStateToProps = ({search}) => ({
  search
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    search: {
      fetch: payload => dispatch({type: 'search/fetch', payload})
    }
  }
});

class SearchPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.search.fetch();
  }

  render () {
    const {search: {data}} = this.props;
    // console.log('data2 is', data);
    return (
      JSON.stringify(data) !== '{}' &&
      <div className={styles['g-main']}>
        <SearchChart data={data}/>
      </div>
    );
  }
}

SearchPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
