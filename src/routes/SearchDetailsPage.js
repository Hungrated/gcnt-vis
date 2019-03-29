import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from '../styles/SearchDetailsPage.less';

import SearchResultMap from '../components/search/SearchDetailsMap';

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

class SearchDetailsPage extends PureComponent {

  // componentDidMount () {
  //   this.props.dispatcher.help.fetch();
  // }

  render () {
    return (
      <div className={styles['g-main']}>
        <div className={styles['g-upper']}>
          <SearchResultMap data={null}/>
        </div>
        <div className={styles['g-lower']}>

        </div>
      </div>
    );
  }
}

SearchDetailsPage.propTypes = {};

// export default connect(mapStateToProps, mapDispatchToProps)(SearchDetailsPage);
export default connect()(SearchDetailsPage);
