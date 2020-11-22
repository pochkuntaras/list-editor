import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import Item from './Item';

import { removeItem } from 'actions/Item';

const stateToProps = (state) => ({
});

const actionsToProps = (dispatch) => ({
  remove: flowRight(dispatch, removeItem),
});

export default connect(stateToProps, actionsToProps)(Item);
