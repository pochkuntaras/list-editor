import { connect } from 'react-redux';

import Items from './Items';

const stateToProps = (state) => ({
  items: state.items
});

export default connect(stateToProps)(Items);
