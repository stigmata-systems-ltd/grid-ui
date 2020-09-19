import React from "react";
import IconButton from "../../common/forms/IconButton";
export const transformGridData = (gridData) => {
  let tmpArr = [];
  gridData &&
    gridData.map((grid) => {
      let gridStatus = grid.status === "False" ? "In Progress" : grid.status;
      tmpArr.push({
        id: grid.gridId,
        gridNum: grid.gridno,
        gridArea: grid.grid_area,
        gridStatus: gridStatus,
        createdDate: grid.createdAt,
      });
    });
  console.log("tmparr", tmpArr);
  return tmpArr;
};
export const _viewGridMetaData = (handleDelete, handleEdit, handleView) => {
  return [
    {
      sortable: false,
      cell: (row) => {
        return (
          <IconButton
            iconName="faTimes"
            className={"table-delete-icon"}
            onClick={() => handleDelete(row.id)}
          />
        );
      },
      width: "2%",
    },
    {
      name: "Grid Number",
      selector: "gridNum",
      sortable: true,
    },
    {
      name: "Area",
      selector: "gridArea",
      sortable: false,
    },
    {
      name: "Status",
      selector: "gridStatus",
      sortable: false,
    },
    {
      name: "Create date",
      selector: "createdDate",
      sortable: false,
    },
    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        return (
          <>
            <span className="text-primary table-view-link" onClick={() => handleView(row.id)}>View</span>
            <IconButton
              iconName="faEdit"
              onClick={() => handleEdit(row.id)}
            />
          </>
        );
      },
    },
  ];
};
