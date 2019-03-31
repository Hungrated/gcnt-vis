import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/OverviewPage.less';

import OverviewMap from '../components/overview/OverviewMap';
import NodeCountTop15Chart from '../components/overview/NodeCountTop15Chart'
import ConnectionCountTop15Chart from '../components/overview/ConnectionCountTop15Chart'

const mapStateToProps = ({overview}) => ({
  overview
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    overview: {
      fetch: payload => dispatch({type: 'overview/fetch', payload})
    }
  }
});

class OverviewPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.overview.fetch();
  }

  render () {
    const {overview: {data}} = this.props;

    const totalData = data.total || {};

    const totalDataKeys = Object.keys(totalData);

    return (
      JSON.stringify(data) !== '{}' &&
      <div className={styles['g-main']}>
        <OverviewMap data={data.data}/>
        <div className={styles['g-lower']}>
          {
            totalDataKeys.slice(0, 7).map(function (item) {
              return (
                <div key={item} className={styles['m-dataitem']}>
                  <div className={styles['digit']}>{totalData[item]}</div>
                  <div className={styles['sub']}>{item}</div>
                </div>
              );
            })
          }
          {
            totalDataKeys.slice(7).map(function (item) {
              return (
                <div key={item} className={styles['m-dataitem2']}>
                  <div className={styles['area']}>{totalData[item]}</div>
                  <div className={styles['sub']}>{item}</div>
                </div>
              );
            })
          }
        </div>
        <div className={styles['g-aside']}>
          <NodeCountTop15Chart data={data['nodes'] || []}/>
          <ConnectionCountTop15Chart data={data['connections'] || []}/>
        </div>
      </div>
    );
  }
}

OverviewPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
