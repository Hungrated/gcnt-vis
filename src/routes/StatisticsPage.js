import React, { PureComponent } from 'react';
import { connect } from 'dva';

import HeatChart from '../components/statistics/HeatChart';
import NationalTop15Chart from '../components/statistics/NationalTop15Chart';
import ConnectionTop15Chart from '../components/statistics/ConnectionTop15Chart';
import MscTop15Chart from '../components/statistics/MscTop15Chart';
import HlrTop15Chart from '../components/statistics/HlrTop15Chart';

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
        <div className={styles['g-left']}>
          <NationalTop15Chart data={data['nationalTop15Chart']}/>
          <ConnectionTop15Chart data={data['connectionTop15Chart']}/>
        </div>
        <div className={styles['g-mid']}>
          <HeatChart data={data['provinceTotalChart']}/>
        </div>
        <div className={styles['g-right']}>
          <MscTop15Chart data={data['mscTop15Chart']}/>
          <HlrTop15Chart data={data['hlrTop15Chart']}/>
        </div>
      </div>
    );
  }
}

StatisticsPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
