import { uniqueId } from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';
import 'bootstrap-select';
import 'bootstrap-select/dist/css/bootstrap-select.css';

/**
 * This is a React Component for displaying a multi select.
 *
 * @prop {String} label       Label for select box. Defaults to "Show Me"
 * @prop {String} name        HTML name of element. Required
 * @prop {func}   onChange    Event bound to element selection
 * @prop {Array}  options     Array of options to map/display
 * @prop {bool}   showActions Display the action header.
 *
 * @return {mixed} React Component
 */
class MultiSelectField extends Component {
  componentDidMount() {
    const { name, onChange, value } = this.props;
    const ref = this.refs[name];
    const $multi = $(ref).selectpicker();

    // if we have valid values, select those values. Default to selecting everything
    if (value && value.length > 0) {
      $multi.selectpicker('val', value);
    } else {
      $multi.selectpicker('selectAll');
    }

    $(ref).on('changed.bs.select', function () {
      onChange($(this).val() || []);
    });
  }

  render() {
    const {
      id,
      label,
      name,
      options,
      showActions,
    } = this.props;

    return (
      <fieldset>
        <label htmlFor={id} className="vertical-centered-label text-right">{label} </label>
        <div className="form-wrapper row" style={{ marginTop: 0 }}>
          <select data-multiselect id={id} name={name} ref={name} multiple className="col-md-12" data-type="goals" data-actions-box={showActions}>
            {options.map(el => <option key={`multi-select-option-${el.id}`} value={el.id}>{el.name}</option>)}
          </select>
        </div>
      </fieldset>
    );
  }
}

MultiSelectField.defaultProps = {
  id: uniqueId('multi-select-field'),
  label: 'Show Me',
  name: '',
  onChange: e => e,
  options: [],
  showActions: true,
  value: [],
};

MultiSelectField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  showActions: PropTypes.bool,
  value: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default MultiSelectField;
