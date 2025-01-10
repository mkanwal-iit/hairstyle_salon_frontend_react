import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ServiceShow } from "./ServiceShow";
import { Modal } from "./Modal";
import { ServicesIndex } from "./ServicesIndex";

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
  // const homeBackgroundUrl = "https://i.etsystatic.com/16895977/r/il/69634d/4897961404/il_570xN.4897961404_7839.jpg";
  return (
    <div
    // style={{
    //   backgroundImage: `url(${homeBackgroundUrl})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "100vh", // This sets the height of the image background to fill the screen
    //   color: "white", // Sets text color to white for better readability
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   textAlign: "center",
    // }}
    >
      <ServicesIndex services={services} onShow={handleShow} />
      <Modal show={isServiceShowVisible} onClose={() => setIsServiceShowVisible(false)}>
        <ServiceShow service={currentService} />
      </Modal>
    </div>
  );
}
