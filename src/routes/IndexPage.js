import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.less';

import IndexMap from '../components/IndexMap';

const mapStateToProps = ({ index }) => ({
  index,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    index: {
      fetch: payload => dispatch({ type: 'index/fetch', payload }),
    },
  },
});

class IndexPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.index.fetch();
  }

  render () {
    const { index: { data } } = this.props;
    return (
      <div className={styles['g-main']}>
        <IndexMap data={data}/>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
