import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
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
import { addSubContractor } from '../../actions/subContractorActions';
import CustomAlert from '../../common/forms/customAlert';
class SubContractor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const subprop = this.props.scr;
    console.log(this.props);
    return (
      <ContentLoader>
        <FormContainer formTitle={'Add Sub Contractor'}>
          <div>
            {this.props.scr.message ? (
              <CustomAlert
                variant={this.props.scr.variant}
                message={this.props.scr.message}
              />
            ) : null}
          </div>
          <FormRow>
            <TextInput
              label="SubContractor Name"
              name="subName"
              id="subName"
              onChange={e => this.props.handleChangeSubName(e.target.value)}
              value={subprop.subContractorName}
            />
            <TextInput
              label="Vendor Code"
              name="subCode"
              id="subCode"
              onChange={e => this.props.handleChangeSubCode(e.target.value)}
              value={subprop.subContractorCode}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Contact Person"
              name="subContactPerson"
              id="subContactPerson"
              onChange={e =>
                this.props.handleChangesubContractorContactPerson(
                  e.target.value
                )
              }
              value={subprop.subContractorContactPerson}
            />
            <TextInput
              label="Contact Address"
              name="subContactAddress"
              id="subContactAddress"
              onChange={e =>
                this.props.handleChangesubContactAddress(e.target.value)
              }
              value={subprop.subContractorContactAddres}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Sub-Contractor Phone"
              name="subPhone"
              id="subPhone"
              onChange={e => this.props.handleChangesubPhone(e.target.value)}
              value={subprop.subContractorPhone}
            />
            <TextInput
              label="Sub-Contractor Email"
              name="subEmail"
              id="subEmail"
              onChange={e => this.props.handleChangesubEmail(e.target.value)}
              value={subprop.subContractorEmail}
            />
          </FormRow>
          <Button
            btnText="Save"
            onClick={this.props.saveSubContractorData}
            btnType="primary"
          />
          <Button btnText="Cancel" btnType="cancel" />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default SubContractor;
