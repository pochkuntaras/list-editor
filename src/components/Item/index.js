import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import Item from './Item';

import {
  moveItemUp,
  moveItemDown,
  addSublist,
  removeItem
} from 'actions/Item';

const stateToProps = (state) => ({
});

const actionsToProps = (dispatch) => ({
  moveItemUp: flowRight(dispatch, moveItemUp),
  moveItemDown: flowRight(dispatch, moveItemDown),
  addSublist: flowRight(dispatch, addSublist),
  remove: flowRight(dispatch, removeItem),
});

export default connect(stateToProps, actionsToProps)(Item);
