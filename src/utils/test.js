import axios from "axios";
export const testData = () => {
  let i = 20;
  let tmpArr = [];
  for (i = 20; i < 100; i++) {
    let roleId = "1";
    if (i % 2 === 0) {
      roleId = "2";
    }
    if (i % 3 === 0) {
      roleId = "3";
    }
    if (i % 4 === 0) {
      roleId = "4";
    }
    tmpArr.push({
      firstName: "U-" + i + "F",
      lastName: "U-" + i + "L",
      email: "u-" + i + "@gmail.com",
      mobileNo: "9840614023",
      userName: "U-" + i,
      roleId: roleId,
      isActive: true,
      createdBy: "1",
    });
  }
  console.log(tmpArr);
};

export const setCompletedLayer = () => {
  let i=0;
  let gridId =117;
  for (i = 1; i <= 15; i++) {
  var data = JSON.stringify({
    gridId: gridId,
    layerId: i,
    fillingDate: "2020-09-18",
    fillingMaterial: "Material-1",
    area_layer: 123,
    status: "Completed",
    totalQuantity: 0,
    fillType: "Fill Type-1",
    topFillMaterial: "123",
    remarks: "123",
    user_id: 1,
    cT_RFIno: "123",
    cT_inspection_date: "2020-09-18",
    cT_approval_date: "2020-09-18",
    cT_RFI_status: "Yes",
    lV_RFIno: "123",
    lV_inspection_date: "2020-09-18",
    lV_approval_date: "2020-09-18",
    lV_RFI_status: "Yes",
    layerSubContractor: [],
  });

  var config = {
    method: "post",
    url:
      "http://ec2-13-212-97-74.ap-southeast-1.compute.amazonaws.com/api/Layer/AddLayer",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
