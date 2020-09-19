import React from 'react';
import IconButton from '../../common/forms/IconButton';

export const transformRoles = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        id: item.id,
        roleName: item.name,
        roleDescription: item.description,
      });
    });
  console.log('tmparr', tmpArr);
  return tmpArr;
};

export const viewRoleMetaData = (handleDelete, handleEdit) => {
  return [
    {
      name: 'Role Id',
      selector: 'id',
      sortable: false,
    },
    {
      name: 'Role Name',
      selector: 'roleName',
      sortable: false,
    },
    {
      name: 'Role Description',
      selector: 'roleDescription',
      sortable: false,
    },
    {
      name: 'Actions',
      sortable: false,
      cell: row => {
        console.log('row', row.id);
        return (
          <>
            <IconButton iconName="faEdit" onClick={() => handleEdit(row.id)} />
          </>
        );
      },
    },
  ];
};
