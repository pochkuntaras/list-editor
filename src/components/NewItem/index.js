import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import { addItem } from 'actions/Items';

import NewItem from './NewItem';

const stateToProps = (state) => ({
});

const actionsToProps = (dispatch) => ({
  action: flowRight(dispatch, addItem)
});

export default connect(stateToProps, actionsToProps)(NewItem);
