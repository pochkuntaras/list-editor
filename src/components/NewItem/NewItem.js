import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { assign, set } from 'lodash/object';

import TextField from 'components/shared/TextField';
import Button from 'components/shared/Button';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          name: '',
        },
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState(
      set(
        assign({}, this.state),
        ['form', 'values', 'name'],
        e.target.value,
      )
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    const { action } = this.props;
    const { form } = this.state;

    action(form.values.name);

    this.setState(
      set(
        assign({}, this.state),
        ['form', 'values', 'name'],
        '',
      )
    );
  }

  render() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="text"
          name="name"
          value={form.values.name}
          placeholder="New Item"
          onChange={this.handleChange}
        />
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

NewItem.propTypes = {
  action: PropTypes.func.isRequired,
};

export default NewItem;
