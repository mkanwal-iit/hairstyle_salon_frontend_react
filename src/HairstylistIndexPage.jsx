import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { HairstylistsIndex } from "./HairstylistsIndex";
import { Modal } from "./Modal";
import { HairstylistShow } from "./HairstylistShow";

export function HairstylistsIndexPage() {
  const hairstylists = useLoaderData();
  const [isHairstylistShowVisible, setIsHairstylistShowVisible] = useState(false);
  const [currentHairstylist, setCurrentHairstylist] = useState({});
  const handleShow = (hairstylist) => {
    console.log("handleShow", hairstylist);
    setIsHairstylistShowVisible(true);
    setCurrentHairstylist(hairstylist);
  };

  return (
    <div className="container mx-auto">
      <HairstylistsIndex hairstylists={hairstylists} onShow={handleShow} />
      <Modal show={isHairstylistShowVisible} onClose={() => setIsHairstylistShowVisible(false)}>
        <HairstylistShow hairstylist={currentHairstylist} />
      </Modal>
    </div>
  );
}
