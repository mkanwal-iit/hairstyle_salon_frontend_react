import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppointmentNew } from "./AppointmentsNew";
import Weather from "./weather";
import { useState } from "react";

export function AppointmentsNewPage() {
  const navigate = useNavigate();
  const [appointmentDate, setAppointmentDate] = useState(new Date()); // Example initial appointment date

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("/appointments.json", params).then((response) => {
      console.log(response);
      navigate("/");
    });
  };
  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <div className="md:w-1/2">
          <AppointmentNew onCreate={handleCreate} onDateChange={handleDateChange} />
        </div>
        <div className="md:w-1/2">
          <Weather initialCity="Chicago" appointmentDate={appointmentDate} />
        </div>
      </div>
    </div>
  );
}
