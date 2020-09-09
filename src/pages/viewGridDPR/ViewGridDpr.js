import React, { Component } from "react";
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
import GridDetailsDataTable from '../../common/GridDetailsDataTable';

import {
  _cGMetaData,
  _RFILevelVerificationMetaData,
  _RFICompactionTestMetaData,
  _CGbodyData,
  _RFILevelVerificationbodyData,
  _RFICompactionTestbodyData,
} from './utils';

class ViewGridDpr extends Component {

    constructor(){
        super()
        this.state = {
        }
    }

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"View Grid DPR"}>
                    <FormRow>
                        <TextInput 
                            label="Grid Number"
                        />
                        <TextInput 
                            label="Grid Area"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            label="Grid Location"
                        />
                      
                    </FormRow>

                    {/* Grid Details */}

                    <FormRow>
            <br />
            <h5> Cleaning and Grubbing Details</h5>
            <GridDetailsDataTable
              metaData={_cGMetaData}
              bodyData={_CGbodyData}
            />
          </FormRow>
          <FormRow>
            <br />
            <h5> RFI Level Verification</h5>
            <GridDetailsDataTable
              metaData={_RFILevelVerificationMetaData}
              bodyData={_RFILevelVerificationbodyData}
            />
          </FormRow>
          <FormRow>
            <br />
            <h5> RFI Compaction Testing</h5>
            <GridDetailsDataTable
              metaData={_RFICompactionTestMetaData}
              bodyData={_RFICompactionTestbodyData}
            />
          </FormRow>
                   
                    
                </FormContainer>
            </ContentLoader>
        )
    }
}

export default ViewGridDpr;