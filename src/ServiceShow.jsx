import { Link } from "react-router-dom";

export function ServiceShow({ service }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
      <p className="mb-4">{service.description}</p>
      <p className="mb-4">
        <span className="font-semibold">Price:</span> ${service.price}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Duration:</span> {service.duration} minutes
      </p>
      <div className="flex justify-center mb-4">
        <img src={service.service_image} alt={service.name} className="max-w-xs h-auto object-cover mb-4 rounded-lg" />
      </div>
      {service.hairstylists && service.hairstylists.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Available Hairstylists</h2>
          {service.hairstylists.map((hairstylist) => (
            <div key={hairstylist.id} className="mb-4">
              <h3 className="text-lg font-semibold">{hairstylist.name}</h3>
              <p className="mb-2">
                <span className="font-semibold">Bio:</span> {hairstylist.bio}
              </p>
              <img
                src={hairstylist.hairstylist_image}
                alt={hairstylist.name}
                className="w-24 h-24 object-cover rounded-full mb-2"
              />
              <Link
                to={`/appointments/new?service_id=${service.id}&hairstylist_id=${hairstylist.id}`}
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
