import config from "../../config";

export const tranformSubCat = (data) => {
  let tmpArr = [];
  data && data.map(item => {
    tmpArr.push({
      quantity: item.quantity,
      subName: item.subContractorName,
    })
  });
  return tmpArr;
}

export const getLayerImages = (data) => {
  console.log("input",data);
  let tmpArr = [];
  data && data.map(item => {
    if(item.uploadType === "Images") {
      tmpArr.push(
        config.BASE_URL + "/" + item.filepath
      )
    }
  })
  return tmpArr;
}
export const tabMetaData = [
  {
    id: 1,
    navText: 'Grid Details',
    isActive: true,
  },
  {
    id: 2,
    navText: 'Layer DPR Details',
    isActive: false,
  },
];

export const images = [
  'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
  'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
];
export const transformLayerList = layerList => {
  let tmpArr = [];
  layerList &&
    layerList.map(layer => {
      tmpArr.push({
        value: layer.id,
        label: layer.layerName,
      });
    });
  return tmpArr;
};

export const _latLongMetaData = ['latitude', 'longitude'];

//layer DPR
export const _layerMetaData = [
  'Layer No',
  'RFI Level Approval Date',
  'RFI Level Approval Status',
  'RFI Testing Approval Date',
  'RFI Testing Approval status',
  'Layer Status',
  'Actions',
];

export const _subContractorQuantityMetaData = [
  'Quantity',
  'SubContractor Name',
];

export const _layerBodyData = [
  {
    LayerNo: 'At +4.67m CD',
    RFIAppDate: '1/9/2020',
    RFIAppStatus: 'Complete',
    RFITestingDate: '1/9/2020',
    RFITestingStatus: 'Complete',
    LayerStatus: 'New',
  },
];

//end Layer Dpr

export const _cGMetaData = [
  // 'Grid Area',
  // 'GEO-Location',
  'RFI No',
  'Inspection Date',
  'Approval Date',
  'RFI Status',
  // 'Actions',
];

export const _RFILevelVerificationMetaData = [
  'S.No',
  'Layer No',
  'Layer Status(Approval)',
  'RFI No',
  'Inspection Date',
  'Approval Date',
  'RFI Status',
  'Actions',
];

export const _RFICompactionTestMetaData = [
  'S.No',
  'Layer No',
  'Layer Status(Approval)',
  'RFI No',
  'Inspection Date',
  'Approval Date',
  'RFI Status',
  'Actions',
];

export const _CGbodyData = [
  {
    sno: '1',
    // gridArea: '1000',
    // GEOLocation: '',
    RFINo: '100',
    InspectionDate: '1/9/2020',
    ApprovalDate: '2/9/2020',
    RFIStatus: 'Approved',
  },
];

export const _RFILevelVerificationbodyData = [
  {
    sno: '1',
    LayerNum: 'At +4.67m CD',
    LayerStatus: 'Yes',
    RFINo: '100',
    InspectionDate: '1/9/2020',
    ApprovalDate: '2/9/2020',
    RFIStatus: 'Approved',
  },
];

export const _RFICompactionTestbodyData = [
  {
    sno: '1',
    LayerNum: 'At +4.67m CD',
    LayerStatus: 'No',
    RFINo: '100',
    InspectionDate: '1/9/2020',
    ApprovalDate: '2/9/2020',
    RFIStatus: 'Approved',
  },
  {
    sno: '2',
    LayerNum: 'At +4.74m CD',
    LayerStatus: 'No',
    RFINo: '100',
    InspectionDate: '1/9/2020',
    ApprovalDate: '2/9/2020',
    RFIStatus: 'Approved',
  },
  {
    sno: '3',
    LayerNum: 'At +4.92m CD',
    LayerStatus: 'No',
    RFINo: '100',
    InspectionDate: '1/9/2020',
    ApprovalDate: '2/9/2020',
    RFIStatus: 'Approved',
  },
];

export const getGridRFILevelVerificationDetails = data => {
  let transData = [];
  data.map(item => {
    transData.push({
      layerDtlsId: item.layerDtlsId,
      layerNo: item.layerNo,
      cT_RFI_status: item.cT_RFI_status,
      lV_RFIno: item.lV_RFIno,
      lV_inspection_date: item.lV_inspection_date,
      lV_approval_date: item.lV_approval_date,
      lV_RFI_status: item.lV_RFI_status,
    });
  });
  return transData;
};

export const getGridRFICompactionTestingDetails = data => {
  let transData = [];
  data.map(item => {
    transData.push({
      layerDtlsId: item.layerDtlsId,
      layerNo: item.layerNo,
      cT_RFI_status: item.cT_RFI_status,
      cT_RFIno: item.cT_RFIno,
      cT_inspection_date: item.cT_inspection_date,
      cT_approval_date: item.cT_approval_date,
      lV_RFI_status: item.lV_RFI_status,
    });
  });
  return transData;
};
