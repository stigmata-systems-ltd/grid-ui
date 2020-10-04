import { gridData } from "./gridData";

import axios from "axios";
export const test = (maps) => {

    gridData.map((item) => {
      const bounds = new maps.LatLngBounds();
      let points = [];
      item.gridGeoLocation.map((gr) => {
        points.push({
          lat: parseFloat(gr.latitude),
          lng: parseFloat(gr.longitude),
        });
      });
      console.log("points",points);
  
      for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
      const center = bounds.getCenter();
      console.log("center",center.toString())
      let latLng = center.toString().replace("(", "");
      latLng = latLng.replace(")", "");
      latLng = latLng.replace(" ", "");
      latLng = latLng.replace(" ", "");
      latLng = latLng.split(",");
      const postData = {
        gridno: item.gridno,
        grid_area: parseInt(item.grid_area),
        gridGeoLocation: item.gridGeoLocation,
        user_id: 1,
        marker_latitide: parseFloat(latLng[0]),
        marker_longitude: parseFloat(latLng[1]),
      };
      axios.post("http://ec2-13-212-97-74.ap-southeast-1.compute.amazonaws.com/api/Grid/AddGrid", postData);
    });
  };