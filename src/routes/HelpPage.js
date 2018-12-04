import React, { PureComponent } from 'react';
import { connect } from 'dva';

import styles from '../styles/HelpPage.less';

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

class HelpPage extends PureComponent {

  // componentDidMount () {
  //   this.props.dispatcher.help.fetch();
  // }

  render () {
    return (
      <div className={styles['g-main']}>
      </div>
    );
  }
}

HelpPage.propTypes = {};

// export default connect(mapStateToProps, mapDispatchToProps)(HelpPage);
export default connect()(HelpPage);
