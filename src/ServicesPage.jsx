import axios from "axios";
import { useState, useEffect } from "react";

import { ServicesIndex } from "./ServicesIndex";
import { AppointmentsIndex } from "./AppointmentsIndex";

export function ServicesPage() {
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);
  // const [hairstylist, setHairstylist] = useState({});

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

  // const handleHairstylistShow = (id) => {
  //   console.log("handleHairstylistShow", id);
  //   axios
  //     .get(`/hairstylists/${id}.json`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setHairstylist(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching hairstylist:", error);
  //     });
  // };

  useEffect(handleIndex, []);
  useEffect(handleAppointmentsIndex, []);
  // useEffect(handleHairstylistShow, []);

  return (
    <main>
      <AppointmentsIndex appointments={appointments} />
      <ServicesIndex services={services} />
    </main>
  );
}
