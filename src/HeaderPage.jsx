import axios from "axios";
import { useState, useEffect } from "react";
import { ServiceShow } from "./ServiceShow";
import { Modal } from "./Modal";
import { ServicesIndex } from "./ServicesIndex";
// import { HairstylistShow } from "./HairstylistShow";
export function HeaderPage() {
  const [services, setServices] = useState([]);
  const [isServiceShowVisible, setIsServiceShowVisible] = useState(false);
  const [currentService, setCurrentService] = useState({});

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
  const handleShow = (service) => {
    console.log("handleShow", service);
    setIsServiceShowVisible(true);
    setCurrentService(service);
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <ServicesIndex services={services} onShow={handleShow} />
      <Modal show={isServiceShowVisible} onClose={() => setIsServiceShowVisible(false)}>
        <ServiceShow service={currentService} />
      </Modal>
      {/* <HairstylistShow /> */}
    </div>
  );
}
