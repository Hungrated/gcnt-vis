import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.less';

import IndexMap from '../components/IndexMap';

// const mapStateToProps = (state) => {
//   return {
//     data: state.data
//   };
// };

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
  // state = {
  //   data: {
  //     airportsFields: [],
  //     airlineFields: [],
  //     airports: [],
  //     airlines: [],
  //     routes: []
  //   }
  // };

  componentDidMount () {
    // this.props.dispatch({
    //   type: 'index/fetch',
    //   payload: {}
    // });
    this.props.dispatcher.index.fetch();
  }

  render () {
    // console.log(this.state);
    const { index: { data } } = this.props;
    console.log('data is', data);
    return (
      <div className={styles['g-main']}>
        <IndexMap data={data}/>
        <p className={styles['m-slogan']}>GCNT-Vis: Visualization and analysis
          of global core network topology
          information.</p>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
