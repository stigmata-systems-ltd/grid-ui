import React from 'react';
import IconButton from '../../common/forms/IconButton';

export const transformSubCat = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        id: item.subContractorId,
        subId: item.code,
        subName: item.name,
        subEmail: item.email,
        subPhone: item.phone,
      });
    });
  return tmpArr;
};

export const viewSCRMetaData = (handleDelete, handleEdit, pageAccess) => {
  return [
    {
      sortable: false,
      cell: row => {
        return (
          <>
            {pageAccess.isDelete && (
              <IconButton
                iconName="faTimes"
                className={'table-delete-icon'}
                onClick={() => handleDelete(row.id)}
              />
            )}
          </>
        );
      },
      width: '2%',
    },
    {
      name: 'Vendor Code',
      selector: 'subId',
      sortable: false,
    },
    {
      name: 'Name',
      selector: 'subName',
      sortable: false,
    },
    {
      name: 'Email',
      selector: 'subEmail',
      sortable: false,
    },
    {
      name: 'Phone',
      selector: 'subPhone',
      sortable: false,
    },
    {
      name: 'Actions',
      sortable: false,
      cell: row => {
        return (
          <>
            {pageAccess.isUpdate && (
              <IconButton
                iconName="faEdit"
                onClick={() => handleEdit(row.id)}
              />
            )}
          </>
        );
      },
    },
  ];
};
