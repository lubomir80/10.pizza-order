import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeo"

function getPosition() {
   return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
   });
}



export const fetchAddress = createAsyncThunk("fetchAddress", async () => {

   const positionObj = await getPosition();
   const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
   };

   const addressObj = await getAddress(position);
   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

   return { position, address };
})