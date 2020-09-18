export const testData = () => {
  let i = 20;
  let tmpArr = [];
  for (i = 20; i < 100; i++) {
      let roleId = "1";
      if(i%2 === 0) {
          roleId = "2";
      }
      if(i%3 === 0) {
        roleId = "3";
    }
    if(i%4 === 0) {
        roleId = "4";
    }
    tmpArr.push({
      firstName: "U-"+i+"F",
      lastName: "U-"+i+"L",
      email: "u-"+i+"@gmail.com",
      mobileNo: "9840614023",
      userName: "U-"+i,
      roleId: roleId,
      isActive: true,
      createdBy: "1",
    });
  }
  console.log(tmpArr);
};
