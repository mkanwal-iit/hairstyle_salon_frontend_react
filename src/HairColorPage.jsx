import axios from "axios";
import {} from "react-router-dom";

import HairColorChanger from "./HairColorChanger";

export function HairColorPage() {
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

  return (
    <div>
      <HairColorChanger onCreate={handleCreate} />
    </div>
  );
}
