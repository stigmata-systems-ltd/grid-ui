export const layerOverviewMetadata = data => {
  return [
    {
      title: 'Total Layers',
      number: data.totalLayer,
      iconName: 'faLayerGroup',
      color: 'text-primary',
    },
    {
      title: 'Completed Layers',
      number: data.completedLayer,
      iconName: 'faCheckDouble',
      color: 'text-success',
    },
    {
      title: 'InProgress Layers',
      number: data.inProgressLayer,
      iconName: 'faPeopleCarry',
      color: 'text-warning',
    },
    {
      title: `Billed: ${data.billedLayer}`,
      number: `Unbilled: ${data.unBilledLayer}`,
      iconName: 'faFileInvoiceDollar',
      color: 'text-warning',
    },
    {
      title: 'Yet To Start Layers',
      number: data.newLayer,
      iconName: 'faExclamationCircle',
      color: 'text-danger',
    },
  ];
};
export const overviewMetadata = data => {
  return [
    {
      title: 'Total Grids',
      number: data.totalGrid,
      iconName: 'faBorderAll',
      color: 'text-primary',
    },
    {
      title: 'Completed Grids',
      number: data.completedGrid,
      iconName: 'faCalendarCheck',
      color: 'text-success',
    },
    {
      title: 'In Progress Grids',
      number: data.inProgresssGrid,
      iconName: 'faPeopleCarry',
      color: 'text-warning',
    },
    {
      title: 'Yet To Start Grids',
      number: data.newGrid,
      iconName: 'faExclamationCircle',
      color: 'text-danger',
    },
  ];
};

export const transformGridList = data => {
  let tmpArr = [];
  data &&
    data.map(item => {
      tmpArr.push({
        label: item.gridName,
        value: item.id,
      });
    });
  return tmpArr;
};
