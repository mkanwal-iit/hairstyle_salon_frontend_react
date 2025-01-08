import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AppointmentNew } from "./AppointmentsNew";

export function AppointmentsNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("/appointments.json", params).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  return (
    <div>
      <AppointmentNew onCreate={handleCreate} />
    </div>
  );
}
