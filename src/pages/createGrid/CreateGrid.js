import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../components/FormContainer";
class CreateGrid extends Component {

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Create Grid"}>

                </FormContainer>
            </ContentLoader>
        )
    }
}

export default CreateGrid;