const RECT_DIST = 0.000049;
const CENTER_DIST = 0.000098;

const getTopLeft = (lat, lng) => {
    let nLat = lat + RECT_DIST;
    let nLng = lng - RECT_DIST;
    return {
        nLat,
        nLng
    }
}
const getTopRight = (lat, lng) => {
    let nLat = lat + RECT_DIST;
    let nLng = lng + RECT_DIST;
    return {
        nLat,
        nLng
    }
}
const getBottomRight = (lat, lng) => {
    let nLat = lat - RECT_DIST;
    let nLng = lng + RECT_DIST;
    return {
        nLat,
        nLng
    }
}
const getBottomLeft = (lat, lng) => {
    let nLat = lat - RECT_DIST;
    let nLng = lng - RECT_DIST;
    return {
        nLat,
        nLng
    }
}
const getGridCords = (lat, lng) => {
    const topLeft = getTopLeft(lat, lng);
    const topRight = getTopRight(lat, lng);
    const bottomRight = getBottomRight(lat, lng);
    const bottomLeft = getBottomLeft(lat, lng);
    return [
        {
            latitude: topLeft.nLat,
            longitude: topLeft.nLng,
        },
        {
            latitude: topRight.nLat,
            longitude: topRight.nLng,
        },
        {
            latitude: bottomRight.nLat,
            longitude: bottomRight.nLng,
        },
        {
            latitude: bottomLeft.nLat,
            longitude: bottomLeft.nLng,
        }
    ]
}
const getCenters = (lat, lng) => {
    let right = {
        latitude: lat,
        longitude: lng + CENTER_DIST,
    }
    let top = {
        latitude: lat + CENTER_DIST,
        longitude: lng,
    }
    let left = {
        latitude: lat,
        longitude: lng - CENTER_DIST,
    }
    let bottom = {
        latitude: lat - CENTER_DIST,
        longitude: lng,
    }
    return [
        right,
        bottom,
        left,
        top
    ]
}
export const gridData = (lat, lng) => {
    const centers = getCenters(lat, lng);
    return [
        {
            lat: lat,
            lng: lng,
            title: "Grid-H1V1",
            description: "Center Grid",
            status: "inProgess",
            rectCords: getGridCords(lat, lng)
        },
        {
            lat: centers[0].latitude,
            lng: centers[0].longitude,
            title: "Grid-H1V2",
            description: "Right Grid",
            status: "inProgess",
            rectCords: getGridCords(centers[0].latitude, centers[0].longitude)
        },
        {
            lat: centers[1].latitude,
            lng: centers[1].longitude,
            title: "Grid-H1V3",
            description: "Bottom Grid",
            status: "inProgess",
            rectCords: getGridCords(centers[1].latitude, centers[1].longitude)
        },
        {
            lat: centers[2].latitude,
            lng: centers[2].longitude,
            title: "Grid-H1V4",
            description: "Left grid",
            status: "inProgess",
            rectCords: getGridCords(centers[2].latitude, centers[2].longitude)
        },
        {
            lat: centers[3].latitude,
            lng: centers[3].longitude,
            title: "Grid-H1V5",
            description: "Top grid",
            status: "inProgess",
            rectCords: getGridCords(centers[3].latitude, centers[3].longitude)
        },
    ]
}