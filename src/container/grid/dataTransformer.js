export const getSelectedLayer = (layerData, layerNum) => {
    let selectedLayer = "";
    layerData.map(layer => {
        if(layer.id === layerNum) {
            selectedLayer = layer.gridName;
        }
    })
    return selectedLayer;
}
export const getSelectedGrid = (gridData, gridNum) => {
    let selectedGrid = "";
    gridData.map(grid => {
        if(grid.id === gridNum) {
            selectedGrid = grid.gridName;
        }
    })
    return selectedGrid;
}