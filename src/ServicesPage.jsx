import axios from "axios";
import { useState, useEffect } from "react";

import { ServicesIndex } from "./ServicesIndex";
import { AppointmentsIndex } from "./AppointmentsIndex";

export function ServicesPage() {
  const [services, setServices] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios
      .get("/services.json")
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  };

  useEffect(handleIndex, []);
  const [appointments, setAppointments] = useState([]);
  const handleAppointmentsIndex = () => {
    console.log("handleAppointmentsIndex");
    axios
      .get("/appointments.json")
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  };
  useEffect(handleAppointmentsIndex, []);
  return (
    <main>
      <AppointmentsIndex appointments={appointments} />
      <ServicesIndex services={services} />
    </main>
  );
}
