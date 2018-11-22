import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.less';

import IndexMap from '../components/IndexMap';

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

class IndexPage extends PureComponent {
  state = {
    data: {
      airportsFields: [],
      airlineFields: [],
      airports: [],
      airlines: [],
      routes: []
    }
  };

  componentDidMount () {
    this.props.dispatch({
      type: 'index/fetch',
      payload: {}
    });
  }

  render () {
    console.log(this.state);

    return (
      <div className={styles['g-main']}>
        <IndexMap data={this.state.data}/>
        <p className={styles['m-slogan']}>GCNT-Vis: Visualization and analysis
          of global core network topology
          information.</p>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect(mapStateToProps)(IndexPage);
