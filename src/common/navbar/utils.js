export const metaDataNavbar = [
  {
    id: '1',
    navText: 'Dashboard',
    iconName: 'faHome',
    hasSubNav: false,
    route: 'dashboard',
  },
  {
    id: '2',
    navText: 'Grid',
    iconName: 'faThLarge',
    hasSubNav: true,
    route: 'grid',
    subNavs: [
      {
        id: 'gridSub' + 1,
        navText: 'Create Grid',
        route: 'creategrid',
      },
      {
        id: 'gridSub' + 2,
        navText: 'Grid Layer - DPR',
        route: 'griddpr',
      },

      {
        id: 'gridSub' + 3,
        navText: 'View Grid',
        route: 'viewgrid',
      },
      {
        id: 'gridSub' + 4,
        navText: 'Grid Details',
        route: 'griddetails',
      },
      {
        id: 'gridSub' + 5,
        navText: 'Edit Grid',
        route: 'editgrid',
      },
      {
        id: 'gridSub' + 6,
        navText: 'Delete Grid',
        route: 'deletegrid',
      },
    ],
  },
  {
    id: '3',
    navText: 'Client Billing',
    iconName: 'faFileInvoiceDollar',
    hasSubNav: false,
    route: 'clientbilling',
  },
  {
    id: '4',
    navText: 'Sub-Contractor',
    iconName: 'faUser',
    hasSubNav: false,
    route: 'subcontractor',
  },
  {
    id: '5',
    navText: 'Reports',
    iconName: 'faChartPie',
    hasSubNav: false,
    route: 'login',
  },
  {
    id: '6',
    navText: 'Help',
    iconName: 'faQuestionCircle',
    hasSubNav: false,
    route: 'login',
  },
  {
    id: '7',
    navText: 'Settings',
    iconName: 'faCog',
    hasSubNav: false,
    route: 'login',
  },
];
