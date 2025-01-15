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

  useEffect(handleIndex, []);

  return (
    <div className="relative min-h-screen bg-gray-500 text-white">
      <div className="absolute inset-0 h-1/2">
        <img
          src="https://poshstudiony.com/pictures/background/02.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-8xl font-thin text-green-400 mb-2 shadow-lg"
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
            <p className="text-lg mb-12">
              This is a salon company located in Chicago, IL. Our professional journey is a testament to our dedication
              and collaborative spirit. Having worked side by side for the past seven years, we seamlessly complement
              each other’s strengths, creating a powerhouse team in the world of hairstyling. We shared a vision and
              commitment to excellence laid the foundation of The Hair Heaven Salon.
            </p>
            <p className="text-lg mb-12">
              Gratitude is a cornerstone of our success story. We attribute much of our growth to the guidance and
              support of mentors who have played pivotal roles in shaping our careers. From the early days of learning
              the ropes to the present moment as salon owners, we carry the invaluable lessons and wisdom passed down by
              those who paved the way.
            </p>
            <p className="text-lg mb-12">
              Location
              <br />
              667 NORTH
              <br />
              Main Chicago, IL 60559
            </p>
            <p className="text-lg mb-12">
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
            <p className="text-lg mb-12">
              Contact
              <br />
              Hair_Haven_Service@gmail.com
              <br />
              (630) 632-7182
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="md:w-2/3 flex justify-center md:justify-center mt-4 md:mt-0"
          >
            <img src="/src/pic.png" alt="Owner" className="w-35 h-67 object-cover rounded-full shadow-lg" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-24"
        >
          {/* <ServicesIndex services={services} onShow={handleShow} /> */}
        </motion.div>
      </div>
      <Modal show={isServiceShowVisible} onClose={() => setIsServiceShowVisible(false)}>
        <ServiceShow service={currentService} />
      </Modal>
    </div>
  );
}
