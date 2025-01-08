import axios from "axios";
import { useState, useEffect } from "react";

import { ServicesIndex } from "./ServicesIndex";
import { AppointmentsIndex } from "./AppointmentsIndex";
import { AppointmentNew } from "./AppointmentsNew";

export function ServicesPage() {
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);

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

  const handleAppointmentCreate = (params, successcallback) => {
    console.log("handleAppointmentCreate");
    axios
      .post("/appointments.json", params)
      .then((response) => {
        console.log(response.data);
        setAppointments([...appointments, response.data]);
        successcallback();
      })
      .catch((error) => {
        console.error("Error creating appointment:", error);
      });
  };

  useEffect(handleIndex, []);
  useEffect(handleAppointmentsIndex, []);

  return (
    <main>
      <AppointmentNew onCreate={handleAppointmentCreate} />
      <AppointmentsIndex appointments={appointments} />
      <ServicesIndex services={services} />
    </main>
  );
}
