import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppointmentNew } from "./AppointmentsNew";
import Weather from "./weather";

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
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <div className="md:w-2/3">
          <AppointmentNew onCreate={handleCreate} />
        </div>
        <div className="md:w-2/3">
          <Weather initialCity="Chicago" />
        </div>
      </div>
    </div>
  );
}
