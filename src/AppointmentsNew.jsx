import { useSearchParams } from "react-router";

export function AppointmentNew({ onCreate }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
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
            <label className="block mb-1">Hairstylist ID:</label>
            <input
              defaultValue={searchParams.get("hairstylist_id")}
              name="hairstylist_id"
              type="number"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1">Service ID:</label>
            <input
              defaultValue={searchParams.get("service_id")}
              name="service_id"
              type="number"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded mt-4">
            Create Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
