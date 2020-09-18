import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUserMetaData = (handleDelete, handleEdit) => {
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
      name: "Name",
      selector: "name",
      sortable: false,
    },
    {
      name: "Email",
      selector: "email",
      sortable: false,
    },
    {
      name: "Mobile Number",
      selector: "mobileNo",
      sortable: false,
    },
    {
      name: "Role",
      selector: "roleName",
      sortable: false,
    },
    {
      name: "Actions",
      sortable: false,
      cell: (row) => {
        console.log("row", row.id);
        return (
          <>
            <IconButton
              iconName="faEdit"
              onClick={() => handleEdit(row.id)}
            />
          </>
        );
      }
    }
  ];
}


export const transformUserList = (userList) => {
  let tmpArr = [];
  userList && userList.map((user) => {
    let fname = user.firstName !== null ? user.firstName : "";
    let lname = user.lastName !== null ? user.lastName : "";
    let tmpObj = {
      id: user.userId,
      name: fname +" "+ lname,
      email: user.email !== null ? user.email : "",
      mobileNo: user.mobileNo !== null ? user.mobileNo : "",
      roleName: user.roleName !== null ? user.roleName : "",
    };
    tmpArr.push(tmpObj);
  });
  return tmpArr;
};

export const transformUserRoles = (userRoles) => {
  let tmpArr = [];
  userRoles.map(role => {
    let tmpObj = {
      id: role.id,
      label: role.name
    }
    tmpArr.push(tmpObj);
  })
  return tmpArr;
}
