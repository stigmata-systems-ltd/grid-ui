export const getTranformedBillableTable = (billableTableData) => {
    let table = [];
    billableTableData.map(row => {
        let tmpObj = {
            id: row.id,
            gridName: row.id,
            layers: row.layers
        }
        table.push(tmpObj);
    })
    return table;
}

export const getTotalLayerCount = (data) => {
    let count = 0;
    data && data.map(item => {
        count += item.layerIds.length;
    })
    return count;
}