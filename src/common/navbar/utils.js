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
    hasSubNav: true,
    route: 'subcontractor',
    subNavs: [
      {
        id: 'SCRSub' + 1,
        navText: 'Create SubContractor',
        route: 'subcontractor',
      },
      {
        id: 'SCRSub' + 2,
        navText: 'List - SubContractor',
        route: 'listsubcontractor',
      },
    ],
  },
  {
    id: '5',
    navText: 'Reports',
    iconName: 'faChartPie',
    hasSubNav: true,
    route: 'report',
      subNavs: [
      {
        id: 'ReportSub' + 1,
        navText: 'Master Report',
        route: 'report',
      },
      {
        id: 'ReportSub' + 2,
        navText: 'SubContractor Report',
        route: 'subcontractorreport',
      },
    ],
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
