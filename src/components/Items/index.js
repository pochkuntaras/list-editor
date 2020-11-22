import { connect } from 'react-redux';

import Items from './Items';

const stateToProps = (state, ownProps) => {
  const { items } = state;
  const { parentId } = ownProps;

  return { items, parentId };
};

export default connect(stateToProps)(Items);
