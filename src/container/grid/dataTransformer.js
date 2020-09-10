export const getGridRFILevelVerificationDetails = (data) => {
    let transData = []
    data.map( item => {
        transData.push ({
            layerDtlsId: item.layerDtlsId,
            layerNo: item.layerNo,
            cT_RFI_status: item.cT_RFI_status,
            lV_RFIno: item.lV_RFIno,
            lV_inspection_date: item.lV_inspection_date,
            lV_approval_date: item.lV_approval_date,
            lV_RFI_status: item.lV_RFI_status,
        })
    })
    return transData;
}

export const getGridRFICompactionTestingDetails = (data) => {
    let transData = []
    data.map( item => {
        transData.push ({
            layerDtlsId: item.layerDtlsId,
            layerNo: item.layerNo,
            cT_RFI_status: item.cT_RFI_status,
            cT_RFIno: item.cT_RFIno,
            cT_inspection_date: item.cT_inspection_date,
            cT_approval_date: item.cT_approval_date,
            lV_RFI_status: item.lV_RFI_status,
        })
    })
    return transData;
}