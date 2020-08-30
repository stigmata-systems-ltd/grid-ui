import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import DataTable from "../../common/DataTable";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";

import { _viewGridMetaData, _bodyData } from "./utils";

class Dashboard extends Component {

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Grid List"}>
                    <FormRow>
                        <DataTable
                            metaData={_viewGridMetaData}
                            bodyData={_bodyData}
                        />
                    </FormRow>
                </FormContainer>
            </ContentLoader>
        )
    }
}

export default Dashboard;