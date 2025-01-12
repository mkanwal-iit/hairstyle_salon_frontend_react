import { Link } from "react-router-dom";

export function HairstylistShow({ hairstylist }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">Hairstylist Profile</h1>
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {hairstylist.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Bio:</span> {hairstylist.bio}
        </p>
        <div className="flex justify-center mb-4">
          <img
            src={hairstylist.hairstylist_image}
            alt={hairstylist.name}
            className="max-w-xs h-auto object-cover mb-4 rounded-lg"
          />
        </div>
        <p className="mb-4">
          <span className="font-semibold">Expertise:</span> {hairstylist.bio}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Experience:</span> {hairstylist.experience}6 years
        </p>

        <p className="mb-4">
          Our hairstylists are highly skilled and experienced in a wide range of hair services. Whether you are looking
          for a classic cut, a trendy style, or a complete makeover, our team is here to help you achieve your desired
          look. We pride ourselves on staying up-to-date with the latest techniques and trends in the industry to
          provide you with the best service possible.
        </p>
        {hairstylist.services.map((service) => (
          <div key={service.id}>
            <p>{service.name}</p>
            <Link
              to={`/appointments/new?hairstylist_id=${hairstylist.id}&service_id=${service.id}`}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
            >
              Book A {service.name}
            </Link>
          </div>
        ))}
        <p className="mt-4">Thank you for making an appointment with me!</p>
      </div>
    </div>
  );
}
