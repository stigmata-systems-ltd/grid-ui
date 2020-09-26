//export const GMAP_API_KEY = "AIzaSyD981UnRbwbMPy4ifleYDzkT5-WH9_rUOY";
export const GMAP_API_KEY = "AIzaSyC-VRHu8WBEreuKlsRop63I-u-jtIPC-HQ";

export const privateRoutes = [
  {
    Dashboard: {
      view: ["/dashboard"],
    },
  },
  {
    GridManagement: {
      view: ["/grid/view"],
      create: ["/grid/create"],
      edit: ["/editgrid"],
      delete: ["/deletegrid"],
    },
  },
  {
    LayerManagement: {
      view: ["/viewgriddpr"],
      edit: ["/grid/dpr"],
    },
  },
  {
    SubContractorManagement: {
      view: ["/subcontractor/list"],
      create: ["/subcontractor/create"],
      edit: ["/subcontractor/edit"],
    },
  },
  {
    UserManagement: {
      view: "/users",
      create: null,
      edit: null,
      delete: null,
    },
  },
  {
    RoleManagement: {
      view: ["/roles/list"],
      edit: ["/roles/edit"],
    },
  },
  {
    ClientBilling: {
      create: ["/clientbilling"],
      edit: null,
      delete: null,
      view: null,
    },
  },
  {
    Report: {
      view: ["/report/master", "/report/subcontractor"],
      create: null,
      edit: null,
      delete: null,
    },
  },
  {
    CleaningAndGrubbing: {
      create: ["/grid/dpr"],
      edit: ["/grid/dpr"],
      view: null,
      delete: null,
    },
  },
  {
    LayerPhotograph: {
      create: ["/grid/dpr"],
      edit: ["/grid/dpr"],
      view: null,
      delete: null,
    },
  },
];
