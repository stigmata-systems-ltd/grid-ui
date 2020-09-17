import React, { Component } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import AddLatLng from '../createGrid/AddLatLng';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import CustomAlert from '../../common/forms/customAlert';

class DeleteGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGridNoData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Delete Grid'}>
          <div>
            {this.props.grid.deleteGrid.message ? (
              <CustomAlert
                variant={this.props.grid.variant}
                message={this.props.grid.deleteGrid.message}
              />
            ) : null}
          </div>
          <FormRow>
            <SimpleDropDown
              label="Select Grid"
              selectOptions={this.props.grid.gridNoData}
              onChange={e => this.props.onGridNoChange(e.target.value)}
            />
          </FormRow>

          <Button
            btnText="Delete"
            onClick={this.props.deleteGrid}
            btnType="primary"
          />
          <Button btnText="Cancel" btnType="cancel" />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default DeleteGrid;
