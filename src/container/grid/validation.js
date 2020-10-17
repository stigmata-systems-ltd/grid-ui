export const validateDpr = (state) => {
    let isValid = true;
    let message = "Please Enter ";
    if(state.dprGridNum === "") {
        isValid = false;
        message += "grid number, "
    }
    if(state.layerNo === "") {
        isValid = false;
        message += "layer number, "
    }
    if(state.dateOfFiling === "") {
        isValid = false;
        message += "Date Of Filling, "
    }
    if(state.areaOfLayer === "") {
        isValid = false;
        message += "Area of layer, "
    }
    if(state.fillType === "") {
        isValid = false;
        message += "fill type, "
    }
    // if(state.rfiMaterialDescription === "") {
    //     isValid = false;
    //     message += "Material Description, "
    // }
    if(state.fillMaterial === "") {
        isValid = false;
        message += "Fill Material, "
    }
    if(state.rfiLayerStatus === "") {
        isValid = false;
        message += "Layer Status"
    }
    return {isValid, message};
}