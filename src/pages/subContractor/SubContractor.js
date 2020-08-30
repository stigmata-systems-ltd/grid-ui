import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import AddLatLng from "../../components/AddLatLng";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import DataTable from "../../common/DataTable";

class SubContractor extends Component {

    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Add Sub Contractor"}>
                    <FormRow>
                        <TextInput 
                            label="Sub-Contractor Name"
                        />
                        <TextInput 
                            label="Sub-Contractor Code"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            label="Contact Person"
                        />
                        <TextInput 
                            label="Contact Address"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            label="Sub-Contractor Phone"
                        />
                        <TextInput 
                            label="Sub-Contractor Email"
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

export default SubContractor;