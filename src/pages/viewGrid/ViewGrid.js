import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import ActionDataTable from "../../common/ActionDataTable";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import SearchBox from "../../common/forms/SearchBox";

import { _viewGridMetaData, _bodyData } from "./utils";

class Dashboard extends Component {

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Grid List"}>

                    <FormRow>
                    <SearchBox />
                        <ActionDataTable
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