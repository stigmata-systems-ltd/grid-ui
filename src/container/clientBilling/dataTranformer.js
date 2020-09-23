export const getCreateBillingPayload = (client) => {
    let billableLayers = [];
    client.billableTableData.map(data => {
        const gridId = getGridIdFromName(data.id, client.gridList);
        const tmpObj = {
            gridId: gridId,
            layerDtlsId: data.layerIds
        }
        billableLayers.push(tmpObj)
    })
    const data = {
        billingMonth: client.billingMonth,
        ipcNo: client.ipcNum,
        billingLayerGrid: billableLayers,
        userId: 1,
      }
      return data;
}
const getGridIdFromName = (gridName, gridList) => {
    let gridId = "";
    gridList.map(grid => {
        if(grid.gridName === gridName) {
            gridId = grid.id;
        }
    })
    return gridId;
}
const getTransBillableLayers = (data, billableLayers) => {
    let billableLayersForSingleGrid = [];
    billableLayers.map(layer => {

    })
}
export const getBillableTableData = (billableLayers, gridName) => {
    let tmpObj = {};
    tmpObj.id = gridName;
    let tmpArr = [];
    let tmpIdArr = [];
    billableLayers.map(layer => {
        if(layer.checked === true) {
            tmpArr.push(layer.layerName)
            tmpIdArr.push(layer.id)
        }
    })
    tmpObj.layers = tmpArr.join();
    tmpObj.layerIds = tmpIdArr;
    return tmpObj;
}

export const getCheckedLayersCount = (billableLayers) => {
    let count = 0;
    billableLayers.map(layer => {
         layer.checked === true && count++;
    })
    return count;
}

export const getGridNameFromId = (gridId, gridList) => {
    let gridName = "";
    gridList.map(grid => {
        if(grid.id === parseInt(gridId)) {
            gridName = grid.gridName;
        }
    })
    return gridName;
}