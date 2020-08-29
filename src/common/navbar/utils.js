export const metaDataNavbar = [
    {
        id: "1",
        navText: "Dashboard",
        iconName: "faHome",
        hasSubNav: false,
    },
    {
        id: "2",
        navText: "Grid",
        iconName: "faThLarge",
        hasSubNav: true,
        subNavs: [
            {
                id: "gridSub" + 1,
                navText: "Grid Layer - DPR"
            },
            {
                id: "gridSub" + 2,
                navText: "View Grids"
            }
        ]
    },
    {
        id: "3",
        navText: "Client Billing",
        iconName: "faFileInvoiceDollar",
        hasSubNav: false,
    },
    {
        id: "4",
        navText: "Sub-Contractor",
        iconName: "faUser",
        hasSubNav: false,
    },
    {
        id: "5",
        navText: "Reports",
        iconName: "faChartPie",
        hasSubNav: false,
    },
    {
        id: "6",
        navText: "Help",
        iconName: "faQuestionCircle",
        hasSubNav: false,
    },
    {
        id: "7",
        navText: "Settings",
        iconName: "faCog",
        hasSubNav: false,
    }
]