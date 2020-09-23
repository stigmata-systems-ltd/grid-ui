export const metaDataNavbar = [
  {
    id: '1',
    navText: 'Dashboard',
    iconName: 'faHome',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/dashboard',
  },
  {
    id: '2',
    navText: 'Grid',
    iconName: 'faThLarge',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/grid',
    subNavs: [
      {
        id: 'gridSub' + 1,
        navText: 'Create Grid',
        route: '/grid/create',
      },
      {
        id: 'gridSub' + 2,
        navText: 'Grid Layer - DPR',
        route: '/grid/dpr',
      },

      {
        id: 'gridSub' + 3,
        navText: 'View Grid',
        route: '/grid/view',
      },
      // {
      //   id: 'gridSub' + 4,
      //   navText: 'Grid Details',
      //   route: 'griddetails',
      // },
    ],
  },
  {
    id: '3',
    navText: 'Client Billing',
    iconName: 'faFileInvoiceDollar',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/clientbilling',
  },
  {
    id: '4',
    navText: 'Sub-Contractor',
    iconName: 'faUser',
    hasSubNav: true,
    isSubNavOpen: false,
    route: '/subcontractor',
    subNavs: [
      {
        id: 'SCRSub' + 1,
        navText: 'Create SubContractor',
        route: '/subcontractor/create',
      },
      {
        id: 'SCRSub' + 2,
        navText: 'List - SubContractor',
        route: '/subcontractor/list',
      },
    ],
  },
  {
    id: '5',
    navText: 'Reports',
    iconName: 'faChartPie',
    hasSubNav: true,
    route: '/report',
    subNavs: [
      {
        id: 'ReportSub' + 1,
        navText: 'Master Report',
        route: '/report/master',
      },
      {
        id: 'ReportSub' + 2,
        navText: 'SubContractor Report',
        route: '/report/subcontractor',
      },
    ],
  },
  {
    id: '6',
    navText: 'Planning Manager',
    iconName: 'faUserTie',
    hasSubNav: false,
    route: '/planingmanager',
  },
  {
    id: '7',
    navText: 'Role Management',
    iconName: 'faUsersCog',
    hasSubNav: false,
    route: '/roles/list',
  },
  // {
  //   id: '6',
  //   navText: 'Help',
  //   iconName: 'faQuestionCircle',
  //   hasSubNav: false,
  //   route: 'login',
  // },
  // {
  //   id: '7',
  //   navText: 'Settings',
  //   iconName: 'faCog',
  //   hasSubNav: false,
  //   route: 'login',
  // },
  {
    id: '8',
    navText: 'Manage Users',
    iconName: 'faUsers',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/users',
  },
];
