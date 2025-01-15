import axios from "axios";
import { useState, useEffect } from "react";
import { ServicesIndex } from "./ServicesIndex";
import { ServiceShow } from "./ServiceShow";
import { Modal } from "./Modal";

export function ServicesPage() {
  const [services, setServices] = useState([]);
  const [isServiceShowVisible, setIsServiceShowVisible] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const handleIndex = () => {
    axios
      .get("/services.json")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  };

  const handleShow = (service) => {
    setIsServiceShowVisible(true);
    setCurrentService(service);
  };

  useEffect(handleIndex, []);

  return (
    <main className="bg-gray-900 text-white p-6">
      <div className="mb-6">
        <ServicesIndex services={services} onShow={handleShow} />
      </div>
      <Modal show={isServiceShowVisible} onClose={() => setIsServiceShowVisible(false)}>
        <ServiceShow service={currentService} />
      </Modal>
    </main>
  );
}
