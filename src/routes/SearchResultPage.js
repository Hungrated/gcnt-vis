import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from '../styles/SearchResultPage.less';

import SearchResultMap from '../components/search/SearchResultMap';

// const mapStateToProps = ({ help }) => ({
//   help,
// });
//
// const mapDispatchToProps = dispatch => ({
//   dispatch,
//   dispatcher: {
//     help: {
//       fetch: payload => dispatch({ type: 'help/fetch', payload }),
//     },
//   },
// });

class SearchResultPage extends PureComponent {

  // componentDidMount () {
  //   this.props.dispatcher.help.fetch();
  // }

  render () {
    return (
      <div className={styles['g-main']}>
        <div className={styles['g-left']}>
          <SearchResultMap data={null}/>
        </div>
        <div className={styles['g-right']}>

        </div>
      </div>
    );
  }
}

SearchResultPage.propTypes = {};

// export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
export default connect()(SearchResultPage);
