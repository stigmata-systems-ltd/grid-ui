import { privateRoutes } from "./globalConst";
import store from "../store";
import { accessLevels } from "./globalConst";
let tmpArr = [];

export const setRoleBasedRoutes = () => {
    const auth = store.getState().auth;
    const access = auth.pageAccess;
    access && access.map(acc => {
        privateRoutes.map(val => {
            if(val.name == acc.pageDetail.description) {
                accessLevels.map(item => {
                    setAccessObj(val.routes[item.static], acc.pageDetail[item.api])
                })
            }
        })
    })
    return tmpArr;
}

const setAccessObj = (routes, accessLevel) => {
    routes && routes!== null && routes.map(route => {
        if(accessLevel === true) {
            tmpArr.push({
                routeName: route,
                allowed: true
            })
        } else {
            tmpArr.push({
                routeName: route,
                allowed: false
            })
        }
    })
}

export const getRoutePermission = (route) => {
    const allowedRoutes = store.getState().auth.allowedRoutes;
    let isAllowed = false;
    allowedRoutes && allowedRoutes.map(item => {
        if(item.routeName === route && item.allowed === true) {
            isAllowed = true;
        }
    })
    return isAllowed;
}

export const getPageAccess = (pageName) => {
    const pageAccess = store.getState().auth.pageAccess;
    return pageAccess.filter(page => page.pageDetail.description === pageName)
}

export const getNavAccess = () => {
    
}