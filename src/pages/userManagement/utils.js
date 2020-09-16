export const _listUserMetaData = ["Name", "Email", "Mobile Number", "Role", "Actions"];

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