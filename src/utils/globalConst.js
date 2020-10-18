export const GRID_IN_PROGRESS = "#ffc100";
export const GRID_COMPLETED = "#71c016";
export const GRID_BILLED = "#7859df";
export const GRID_YET_TO_START = "#ff4747";
export const GRID_ACTIVE = "#4d83ff";

export const GRID_IN_PROGRESS_STROKE = "#CCCC00";
export const GRID_COMPLETED_STROKE = "#006400";
export const GRID_BILLED_STROKE = "#9400d3";
export const GRID_YET_TO_START_STROKE = "#8b0000";
export const GRID_ACTIVE_STROKE = "#00008B";

//export const GMAP_API_KEY = "AIzaSyD981UnRbwbMPy4ifleYDzkT5-WH9_rUOY";
export const GMAP_API_KEY = 'AIzaSyC-VRHu8WBEreuKlsRop63I-u-jtIPC-HQ';

export const accessLevels = [
  {
    static: 'view',
    api: 'isView',
  },
  {
    static: 'create',
    api: 'isAdd',
  },
  {
    static: 'edit',
    api: 'isUpdate',
  },
  {
    static: 'delete',
    api: 'isDelete',
  },
];

export const privateRoutes = [
  {
    name: 'Dashboard',
    routes: {
      view: ['/dashboard'],
      create: null,
      edit: null,
      delete: null,
    },
  },
  {
    name: 'GridManagement',
    routes: {
      view: ['/grid/view'],
      create: ['/master/grid/create'],
      edit: ['/editgrid'],
      delete: ['/deletegrid'],
    },
  },
  {
    name: 'LayerManagement',
    routes: {
      view: ['/grid/viewgriddpr/:id'],
      create: null,
      edit: ['/grid/dpr', '/grid/dpr/:id'],
      delete: null,
    },
  },
  {
    name: 'SubContractorManagement',
    routes: {
      view: ['/master/subcontractor/list'],
      create: ['/master/subcontractor/create'],
      edit: ['/subcontractor/edit'],
      delete: null,
    },
  },
  {
    name: 'UserManagement',
    routes: {
      view: ['/master/users'],
      create: null,
      edit: null,
      delete: null,
    },
  },
  {
    name: 'RoleManagement',
    routes: {
      view: ['/master/roles/list'],
      create: null,
      edit: ['/roles/edit'],
      delete: null,
    },
  },
  {
    name: 'ClientBilling',
    routes: {
      view: null,
      create: ['/clientbilling'],
      edit: null,
      delete: null,
    },
  },
  {
    name: 'Report',
    routes: {
      view: ['/report/master', '/report/subcontractor', '/report/map'],
      create: null,
      edit: null,
      delete: null,
    },
  },
  {
    name: 'CleaningAndGrubbing',
    routes: {
      view: null,
      create: ['/grid/dpr'],
      edit: ['/grid/dpr'],
      delete: null,
    },
  },
  {
    name: 'LayerPhotograph',
    routes: {
      view: null,
      create: ['/grid/dpr'],
      edit: ['/grid/dpr'],
      delete: null,
    },
  },
  {
    name: 'PlanningManager',
    routes: {
      view: ['/planingmanager'],
      create: null,
      edit: null,
      delete: null,
    },
  },
];
