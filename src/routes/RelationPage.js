import React, { PureComponent } from 'react';
import { connect } from 'dva';

import RelationChart from '../components/RelationChart';
import styles from '../styles/RelationPage.less';

const mapStateToProps = ({ relation }) => ({
  relation,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    relation: {
      fetch: payload => dispatch({ type: 'relation/fetch', payload }),
    },
  },
});

class RelationPage extends PureComponent {

  componentDidMount () {
    this.props.dispatcher.relation.fetch();
  }

  render () {
    const { relation: { data } } = this.props;
    // console.log('data2 is', data);
    return (
      JSON.stringify(data) !== '{}' &&
      <div className={styles['g-map']}>
        <RelationChart data={data}/>
      </div>
    );
  }
}

RelationPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(RelationPage);
