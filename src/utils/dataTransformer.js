export const transformGridList = (gridList) => {
    let tmpArr = [];
    gridList.map((grid) => {
      tmpArr.push({
        value: grid.id,
        label: grid.gridName,
      });
    });
    return tmpArr;
  };