import axios from "axios";
import { useNavigate } from "react-router-dom";
import HairColorChanger from "./HairColorChanger";
const handleCreate = (params, successCallback) => {
  console.log("handleCreate", params);
  axios
    .post("/hair", params)
    .then((response) => {
      console.log(response);
      successCallback(response.data.result);
    })
    .catch((error) => {
      console.log(error.response);
      successCallback(null, "error");
    });
};
