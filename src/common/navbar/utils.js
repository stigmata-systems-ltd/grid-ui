import store from '../../store';

export const getNavbar = () => {
  const auth = store.getState().auth;
  let tmpArr = [];
  auth.pageAccess && auth.pageAccess.map(item => {});
};
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
    ],
  },
  {
    id: '3',
    navText: 'Planning Manager',
    iconName: 'faUserTie',
    hasSubNav: false,
    route: '/planingmanager',
  },
  {
    id: '4',
    navText: 'Client Billing',
    iconName: 'faFileInvoiceDollar',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/clientbilling',
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
    id: '7',
    navText: 'Role Management',
    iconName: 'faUsersCog',
    hasSubNav: false,
    route: '/roles/list',
  },
  {
    id: '8',
    navText: 'Users Management',
    iconName: 'faUsers',
    hasSubNav: false,
    isSubNavOpen: false,
    route: '/users',
  },
];
