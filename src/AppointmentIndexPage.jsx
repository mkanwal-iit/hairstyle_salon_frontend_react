import { useState, useEffect } from "react";
import axios from "axios";
import { AppointmentsIndex } from "./AppointmentsIndex";

export function AppointmentIndexPage() {
  const [appointments, setAppointments] = useState([]);

  const handleAppointmentsIndex = () => {
    axios
      .get("/appointments.json")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  };

  useEffect(handleAppointmentsIndex, []);
  return (
    <div>
      <div className="mb-6">
        <AppointmentsIndex appointments={appointments} />
      </div>
    </div>
  );
}
