import React from 'react';
import IconButton from '../../common/forms/IconButton';
export const transformGridData = gridData => {
  let tmpArr = [];
  gridData &&
    gridData.map(grid => {
      let gridStatus = grid.status === 'False' ? 'In Progress' : grid.status;
      tmpArr.push({
        id: grid.gridId,
        gridNum: grid.gridno,
        gridArea: grid.grid_area,
        gridStatus: gridStatus,
        createdDate: grid.createdAt,
      });
    });
  return tmpArr;
};
export const _viewGridMetaData = (
  handleDelete,
  handleEdit,
  handleView,
  pageAccess
) => {
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
      name: 'Grid Number',
      selector: 'gridNum',
      sortable: true,
    },
    {
      name: 'Area',
      selector: 'gridArea',
      sortable: false,
    },
    {
      name: 'Status',
      selector: 'gridStatus',
      sortable: false,
    },
    {
      name: 'Create date',
      selector: 'createdDate',
      sortable: false,
    },
    {
      name: 'Actions',
      sortable: false,
      cell: row => {
        console.log(`PageAccess: ${JSON.stringify(pageAccess)}`);
        return (
          <>
            {pageAccess.isView && (
              <span
                className="text-primary table-view-link"
                onClick={() => handleView(row.id)}
              >
                View
              </span>
            )}
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
