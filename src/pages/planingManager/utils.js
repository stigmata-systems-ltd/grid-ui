import React from 'react';
import IconButton from '../../common/forms/IconButton';
import Button from '../../common/forms/Button';

export const _planningManagerMetaData = (approveLayer, editLayer) => {
  return [
    {
      name: 'Grid No',
      selector: 'gridNo',
      sortable: false,
    },
    {
      name: 'Layer No',
      selector: 'layerNo',
      sortable: false,
    },
    {
      name: 'RFI Level App Date',
      selector: 'rfiLevelAppDate',
      sortable: false,
    },
    {
      name: 'RFI Level App Status',
      selector: 'rfiLevelAppStatus',
      sortable: false,
    },
    {
      name: 'RFI Testing App Date',
      selector: 'rfiTestingAppDate',
      sortable: false,
    },
    {
      name: 'RFI Testing App Status',
      selector: 'rfiTestingAppStatus',
      sortable: false,
    },
    {
      name: 'Layer Status',
      selector: 'layerStatus',
      sortable: false,
    },
    {
      name: 'Remarks',
      selector: 'remarks',
      sortable: false,
    },
    {
      name: 'Actions',
      sortable: false,
      cell: row => {
        console.log('row', row.id);
        return (
          <>
            <IconButton iconName="faEdit" onClick={() => editLayer(row.id)} />
            <IconButton
              iconName="faThumbsUp"
              onClick={() => approveLayer(row.id)}
            />
            {/* <Button
              btnText="Approve"
              btnType="Approve"
              onClick={() => approveLayer(row.id)}
            /> */}
          </>
        );
      },
    },
  ];
};

export const _planningManagerbodyData = [
  {
    gridNo: '1000',
    layerNo: '100',
    RFILevelAppDate: '01/01/2020',
    RFILevelAppStatus: 'Complete',
    RFITestingAppDate: '01/01/2020',
    RFITestingAppStatus: 'Yes',
    LayerStatus: 'Complete',
    Remarks: 'Yes',
  },
];
export const transformLayerData = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        id: item.layerDtlsId,
        gridNo: item.gridNo,
        layerNo: item.layerNo,
        rfiLevelAppDate: item.lV_approval_date,
        rfiLevelAppStatus: item.lV_RFI_status,
        rfiTestingAppDate: item.cT_approval_date,
        rfiTestingAppStatus: item.cT_RFI_status,
        layerStatus: item.status,
        remarks: item.remarks,
      });
    });
  return tmpArr;
};
