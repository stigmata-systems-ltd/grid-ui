import React, { Component } from 'react';
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import AddLatLng from "../createGrid/AddLatLng";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import DataTable from "../../common/DataTable";

import {
    _cGMetaData,
    _CGbodyData,

} from './utils'


class EditDridDetails extends Component {
    render() {

        return (
            <ContentLoader>
                <FormContainer formTitle={"Edit Grid Details"}>
                    <FormRow>
                        <TextInput
                            label="Grid Number"
                            value="H45V60"
                            
                        />
                        <TextInput
                            label="Grid Area"
                            value="1000"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="GEO-Location"
                            value=""
                        />
                        <TextInput
                            label="RFI No"
                            value="100"
                            
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="Inspection Date"
                            value="1/9/2020"
                        />
                        <TextInput
                            label="Approval Date"
                            value="2/9/2020"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="RFI Status"
                            value="Approved"
                        />
                        
                    </FormRow>
                    <Button
                        btnText="Save"
                        btnType="primary"
                    />
                    <Button
                        btnText="Cancel"
                        btnType="cancel"
                    />
                </FormContainer>
            </ContentLoader>
        )




    }



}
export default EditDridDetails;