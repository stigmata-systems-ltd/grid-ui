export const _masterReportMetaData = [
  'S.No',
  'Grid No',
  'Grid Area',
  'C&G RFI App Date',
  'C&G RFI App Status',
  'Layer No',
  'Tot Quantity',
  'Date of Filling',
  'Fill Type',
  'Material Descrp',
  'RFI level App Date',
  'RFI level Status',
  'RFI Testing App Date',
  'RFI Testing Status',
  'Layer Status',
  'Client Billed',
  'Grid Status',
];

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
      });
    });
  console.log('tmparr', tmpArr);
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
  ];
};
