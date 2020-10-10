export const _masterReportbodyData = [
  {
    sno: '1',
    gridNo: '1000',
    gridArea: '100',
    cgRfiAppDate: '1/9/2020',
    cgRfiAppStatus: 'complete',
    layerNo: '111',
    totQuantity: '2000',
    dateOfFilling: '1/9/2020',
    fillType: 'Noo',
    materialDescrp: 'Yes',
    RFIlevelAppDate: '1/9/2020',
    RFIlevelStatus: 'In-progress',
    RFITestingAppDate: '1/9/2020',
    RFITestingAppStatus: 'Ok',
    layerStatus: 'done',
    clientBilled: 'yes',
    gridStatus: 'No',
  },
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

export const _subContractorReportbodyData = [
  {
    sno: '1',
    gridNo: '1000',
    layerNo: '100',
    subContractorName: 'STS',
    vendorCode: 'STS123',
    quantity: '1000',
    materialDescription: 'Yes',
  },
];

export const transformSubConReport = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        id: item.subContractorId,
        SCRName: item.name,
        vendorCode: item.code,
        quantity: item.quantity,
        materialDescription: item.materialDesc,
        createdAt: item.createdAt,
      });
    });
  return tmpArr;
};

export const _subContractorReportMetaData = () => {
  return [
    {
      name: 'Sub-Contractor ID',
      selector: 'id',
      sortable: false,
    },
    {
      name: 'Sub-Contractor Name',
      selector: 'SCRName',
      sortable: false,
    },
    {
      name: 'Vendor Code',
      selector: 'vendorCode',
      sortable: false,
    },
    {
      name: 'Quantity',
      selector: 'quantity',
      sortable: false,
    },
    {
      name: 'Material Description',
      selector: 'materialDescription',
      sortable: false,
    },
    {
      name: 'Creation Date',
      selector: 'createdAt',
      sortable: false,
    },
  ];
};

export const masterExcelHeaders = [
  {
    label: 'Grid No',
    key: 'gridNo',
  },
  {
    label: 'Grid Area',
    key: 'gridArea',
  },
  {
    label: 'C&G RFI App Date',
    key: 'cgRFIAppDate',
  },
  {
    label: 'C&G RFI App Status',
    key: 'cgRFIAppStatus',
  },
  {
    label: 'Layer No',
    key: 'layerNo',
  },
  {
    label: 'Tot Quantity',
    key: 'totQuantity',
  },
  {
    label: 'Date of Filling',
    key: 'dateofFilling',
  },
  {
    label: 'Fill Type',
    selector: 'fillType',
  },
  {
    label: 'Material Descrp',
    key: 'materialDescrp',
  },
  {
    label: 'RFI level App Date',
    key: 'rfiLevelAppDate',
  },
  {
    label: 'RFI level Status',
    key: 'rfiLevelStatus',
  },
  {
    label: 'RFI Testing App Date',
    key: 'rfiTestingAppDate',
  },
  {
    label: 'RFI Testing Status',
    key: 'rfiTestingStatus',
  },
  {
    label: 'Layer Status',
    key: 'layerStatus',
  },
  {
    label: 'Client Billed',
    key: 'clientBilled',
  },
  {
    label: 'Grid Status',
    key: 'gridStatus',
  },
];

export const _masterReportMetaData = () => {
  return [
    {
      name: 'Grid No',
      selector: 'gridNo',
      sortable: false,
    },
    {
      name: 'Grid Area',
      selector: 'gridArea',
      sortable: false,
    },
    {
      name: 'C&G RFI App Date',
      selector: 'cgRFIAppDate',
      sortable: false,
    },
    {
      name: 'C&G RFI App Status',
      selector: 'cgRFIAppStatus',
      sortable: false,
    },
    {
      name: 'Layer No',
      selector: 'layerNo',
      sortable: false,
    },
    {
      name: 'Tot Quantity',
      selector: 'totQuantity',
      sortable: false,
    },
    {
      name: 'Date of Filling',
      selector: 'dateofFilling',
      sortable: false,
    },
    {
      name: 'Fill Type',
      selector: 'fillType',
      sortable: false,
    },
    {
      name: 'Material Descrp',
      selector: 'materialDescrp',
      sortable: false,
    },
    {
      name: 'RFI level App Date',
      selector: 'rfiLevelAppDate',
      sortable: false,
    },
    {
      name: 'RFI level Status',
      selector: 'rfiLevelStatus',
      sortable: false,
    },
    {
      name: 'RFI Testing App Date',
      selector: 'rfiTestingAppDate',
      sortable: false,
    },
    {
      name: 'RFI Testing Status',
      selector: 'rfiTestingStatus',
      sortable: false,
    },
    {
      name: 'Layer Status',
      selector: 'layerStatus',
      sortable: false,
    },
    {
      name: 'Client Billed',
      selector: 'clientBilled',
      sortable: false,
    },
    {
      name: 'Grid Status',
      selector: 'gridStatus',
      sortable: false,
    },
    {
      name: 'Creation Date',
      selector: 'creationDate',
      sortable: false,
    },
  ];
};

export const transformMasterReport = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        gridNo: item.gridDetails.gridno,
        gridArea: item.gridDetails.grid_area,
        cgRFIAppDate: item.gridDetails.cG_approval_date,
        cgRFIAppStatus: item.gridDetails.cG_RFI_status,
        layerNo: item.layerDtls.layerNo,
        totQuantity: item.layerDtls.totalQuantity,
        dateofFilling: item.layerDtls.fillingDate,
        fillType: item.layerDtls.fillType,
        materialDescrp: item.layerDtls.fillingMaterial,
        rfiLevelAppDate: item.layerDtls.lV_approval_date,
        rfiLevelStatus: item.layerDtls.lV_RFI_status,
        rfiTestingAppDate: item.layerDtls.cT_approval_date,
        rfiTestingStatus: item.layerDtls.cT_RFI_status,
        layerStatus: item.layerDtls.status,
        clientBilled: item.layerDtls.isBillGenerated,
        creationDate: item.layerDtls.createdAt,
        gridStatus: item.gridDetails.status,
      });
    });
  return tmpArr;
};
