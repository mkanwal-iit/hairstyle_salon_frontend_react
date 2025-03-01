import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router";

export function AppointmentNew({ onCreate }) {
  const [searchParams] = useSearchParams();
  const [hairstylists, setHairstylists] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedHairstylist, setSelectedHairstylist] = useState(searchParams.get("hairstylist_id") || "");
  const [selectedService, setSelectedService] = useState(searchParams.get("service_id") || "");

  useEffect(() => {
    axios.get("/hairstylists.json").then((response) => {
      setHairstylists(response.data);
    });

    axios.get("/services.json").then((response) => {
      setServices(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div className="rounded-t w-full aspect-[4/3] object-cover">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">New Appointment</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Date and Time:</label>
            <input
              name="datetime"
              type="datetime-local"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1">Hairstylist:</label>
            <select
              name="hairstylist_id"
              value={selectedHairstylist}
              onChange={(e) => setSelectedHairstylist(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            >
              <option value="">Select a hairstylist</option>
              {hairstylists.map((hairstylist) => (
                <option key={hairstylist.id} value={hairstylist.id}>
                  {hairstylist.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Service:</label>
            <select
              name="service_id"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded mt-4">
            Create Appointment
          </button>
        </form>
      </div>
      <div className="mt-8">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=809810a647215e3bc055745f0cbf820aaf017f3e708dd4d05189fb05d5f397f1%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: 0 }}
          width="440"
          height="300"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
      <div className="mt-4">
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=HairColor&details=How+you+will+look+different&location=Hair+haven+Studio&dates=20250117T181400Z%2F20250125T181400Z"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors w-full sm:w-auto"
        >
          Add Appointment to Google Calendar
        </a>
      </div>
    </div>
  );
}
