export const transformSubCatTable = (data) => {
  let tmpArr = [];
  data && data.map((item) => {
      tmpArr.push({
        id: item.subContractorId,
        quantity: item.quantity,
        name: item.subContractorName,
      });
    });
    return tmpArr;
}
//Tmp Fix For Demo, Get Support from API and Fix it
export const transformSubCatReducer = (data, subCatList) => {
  console.log("dt,subcat",data,subCatList)
  let tmpArr = [];
  data && data.map((item) => {
    subCatList && subCatList.map(subCat => {
      if(item.subContractorId === parseInt(subCat.subContractorId)) {
        console.log("in if",item.subContractorId,subCat.name)
        tmpArr.push({
          subContractorId: item.subContractorId,
          quantity: item.quantity,
          subContractorName: subCat.name,
        });
      }
    })
    });
    console.log(tmpArr);
    return tmpArr;
}
export const transformSubCatList = (data) => {
  let tmpArr = [];
  data && data.map((item) => {
      tmpArr.push({
        value: item.subContractorId,
        label: item.name,
      });
    });
    return tmpArr;
}
export const transformLayerList = (layerList) => {
  let tmpArr = [];
  layerList && layerList.map((layer) => {
      tmpArr.push({
        value: layer.id,
        label: layer.gridName,
      });
    });
    return tmpArr;
}
export const calcProgress = (data) => {
  console.log("check", parseInt(data) / 15);
  const convData = (parseInt(data) / 15) * 100;
  if (!isNaN(data)) {
    return convData;
  } else {
    return 0;
  }
};
export const fillTypeMetaData = [
  {
    id: "Fill Type-1",
    gridName: "Fill Type-1",
  },
  {
    id: "Fill Type-2",
    gridName: "Fill Type-2",
  },
  {
    id: "Fill Type-3",
    gridName: "Fill Type-3",
  },
];
export const materialDescMetaData = [
  {
    id: "Material-1",
    gridName: "Material-1",
  },
  {
    id: "Material-2",
    gridName: "Material-2",
  },
  {
    id: "Material-3",
    gridName: "Material-3",
  },
];

export const tabMetaData = [
  {
    id: 1,
    navText: "Cleaning and Grubbing",
    isActive: true,
  },
  {
    id: 2,
    navText: "Layer Progress",
    isActive: false,
  },
  {
    id: 3,
    navText: "Layer Photographs",
    isActive: false,
  },
];
export const gridNumber = [
  {
    text: "Grid-H1V1",
    value: 0,
  },
  {
    text: "Grid-H1V2",
    value: 1,
  },
  {
    text: "Grid-H2V1",
    value: 2,
  },
  {
    text: "Grid-H3V1",
    value: 3,
  },
  {
    text: "Grid-H4V1",
    value: 4,
  },
  {
    text: "Grid-H4V2",
    value: 5,
  },
];

export const layers = [
  {
    text: "At + 4.67m CD",
    value: 0,
  },
  {
    text: "At + 4.74m CD",
    value: 1,
  },
  {
    text: "At + 4.92m CD",
    value: 2,
  },
  {
    text: "At + 5.10m CD",
    value: 3,
  },
];

export const subContractorTableMetaData = [
  "Quantity",
  "Sub-Contractor",
  "Action",
];

export const subContractorTableBodyData = [
  {
    qty: "30",
    sub: "Test User-1",
  },
  {
    qty: "30",
    sub: "Test User-2",
  },
  {
    qty: "30",
    sub: "Test User-3",
  },
];

export const layerDropDownMeta = [
  {
    id: "New",
    gridName: "New",
  },
  {
    id: "InProgress",
    gridName: "InProgress",
  },
  {
    id: "Completed",
    gridName: "Completed",
  },
];

export const layerStsMeta = [
  {
    text: "In Progress",
    value: 1,
  },
  {
    text: "Completed",
    value: 2,
  },
  {
    text: "Yet To Start",
    value: 3,
  },
];

export const images = [
  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
];

export const subContractorMeta = [
  {
    text: "Sub-Contractor-1",
    value: 1,
  },
  {
    text: "Sub-Contractor-2",
    value: 2,
  },
  {
    text: "Sub-Contractor-3",
    value: 3,
  },
  {
    text: "Sub-Contractor-4",
    value: 4,
  },
  {
    text: "Sub-Contractor-5",
    value: 5,
  },
];

export const status = [
  {
    text: "Yes",
    value: 1,
  },
  {
    text: "No",
    value: 2,
  },
];
