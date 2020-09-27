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
      title: 'Total Grid',
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
