import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import Item from './Item';

import { removeItem, moveItemUp, moveItemDown } from 'actions/Item';

const stateToProps = (state) => ({
});

const actionsToProps = (dispatch) => ({
  remove: flowRight(dispatch, removeItem),
  moveItemUp: flowRight(dispatch, moveItemUp),
  moveItemDown: flowRight(dispatch, moveItemDown),
});

export default connect(stateToProps, actionsToProps)(Item);
