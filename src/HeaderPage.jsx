import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ServiceShow } from "./ServiceShow";
import { Modal } from "./Modal";
import { ServicesIndex } from "./ServicesIndex";

export function HeaderPage() {
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
  const handleGetDirections = () => {
    const salonAddress = "1551 W North Ave Ashland, Chicago, IL 60622";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(salonAddress)}`;
    window.open(googleMapsUrl, "_blank");
  };
  useEffect(handleIndex, []);

  return (
    <div className="relative min-h-screen bg-gray-500 text-white">
      <br />
      <br />

      <div className="absolute inset-0 h-1/2">
        <img
          src="https://poshstudiony.com/pictures/background/02.jpg"
          alt="Background"
          className="rounded-t w-full aspect-[4/3] object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl lg:text-4xl font-thin text-green-400 mb-2 shadow-lg"
        >
          Meet the owner
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-2xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-2"
        >
          Madiha Kanwal
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:w-1/3 flex flex-col justify-center font-serif"
          >
            <br />
            <h3 className="text-4xl mb-12 text-green">About Us</h3>
            <div className="text-white ">
              <p className="text-lg mb-12">
                This is a salon company located in Chicago, IL. Our professional journey is a testament to our
                dedication and collaborative spirit. Having worked side by side for the past seven years, we seamlessly
                complement each other’s strengths, creating a powerhouse team in the world of hairstyling. We shared a
                vision and commitment to excellence laid the foundation of The Hair Heaven Salon.
              </p>
              <p className="text-lg mb-12">
                Gratitude is a cornerstone of our success story. We attribute much of our growth to the guidance and
                support of mentors who have played pivotal roles in shaping our careers. From the early days of learning
                the ropes to the present moment as salon owners, we carry the invaluable lessons and wisdom passed down
                by those who paved the way.
              </p>
              <p className="text-2xl mb-12">
                Location
                <br />
                667 NORTH
                <br />
                Main Chicago, IL 60559
                <br />
                <button
                  onClick={handleGetDirections}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-400 transition-colors w-full sm:w-auto"
                >
                  Get Directions
                </button>
              </p>
              <p className="text-2xl mb-12">
                Hours
                <br />
                MONDAY 11AM - 9PM
                <br />
                TUESDAY -THURSDAY 10AM — 9PM
                <br />
                FRIDAY + SATURDAY 9AM — 3PM
                <br />
                SUNDAY CLOSED
              </p>
              <br />
              <p className="text-4xl mb-12">
                Contact
                <br />
                Hair_Haven_Service@gmail.com
                <br />
                (630) 632-7182
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="md:w-2/3 flex justify-center md:justify-center mt-4 md:mt-0"
          >
            <img
              src="/src/madiha.png"
              alt="Owner"
              className="w-38 h-62 object-cover rounded-full shadow-lg absolute opacity-60"
              style={{
                mixBlendMode: "normal",
              }}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-24"
        ></motion.div>
      </div>
      <Modal show={isServiceShowVisible} onClose={() => setIsServiceShowVisible(false)}>
        <ServiceShow service={currentService} />
      </Modal>
    </div>
  );
}
