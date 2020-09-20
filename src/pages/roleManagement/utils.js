import React from 'react';
import IconButton from '../../common/forms/IconButton';
import CheckBox from '../../common/forms/CheckBox';
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

export const transformRolesID = (data, thi) => {
  let tmpArr = [];
  data &&
    data.map(item => {
      // tmpArr.push({
      //   pageName: item.pageDetail.description,
      //   view: item.pageDetail.isView,
      //   add: item.pageDetail.isAdd,
      //   update: item.pageDetail.isUpdate,
      //   delete: item.pageDetail.isDelete,
      // });

      tmpArr.push({
        pageName: item.pageDetail.description,
        view: (
          <CheckBox
            label="Test"
            checked={item.pageDetail.isView ? true : false}
            onChange={() =>
              thi.props.handleChange(
                item.pageDetail.id,
                item.pageDetail.description,
                'isView'
              )
            }
          />
        ),
        add: (
          <CheckBox
            label="Test"
            checked={item.pageDetail.isAdd ? true : false}
          />
        ),
        update: (
          <CheckBox
            label="Test"
            checked={item.pageDetail.isUpdate ? true : false}
          />
        ),
        delete: (
          <CheckBox
            label="Test"
            checked={item.pageDetail.isDelete ? true : false}
          />
        ),
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

export const editRoleMetaData = handleEdit => {
  return [
    {
      name: 'Page Name',
      selector: 'pageName',
      sortable: false,
    },
    {
      name: 'View',
      selector: 'view',
      sortable: false,
    },
    {
      name: 'Add',
      selector: 'add',
      sortable: false,
    },
    {
      name: 'Edit',
      selector: 'update',
      sortable: false,
    },
    {
      name: 'Delete',
      selector: 'delete',
      sortable: false,
    },
  ];
};
