import React, { PureComponent } from 'react';
import { connect } from 'dva';

import StatisticsChart from '../components/statistics/RelationChart';
import styles from '../styles/StatisticsPage.less';

const mapStateToProps = ({statistics}) => ({
  statistics
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    statistics: {
      fetch: payload => dispatch({type: 'statistics/fetch', payload})
    }
  }
});

class StatisticsPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.statistics.fetch();
  }

  render () {
    const {statistics: {data}} = this.props;
    return (
      JSON.stringify(data) !== '{}' &&
      <div className={styles['g-main']}>
        <StatisticsChart data={data}/>
      </div>
    );
  }
}

StatisticsPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
