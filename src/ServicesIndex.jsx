export function ServicesIndex({ services = [], onShow }) {
  return (
    <div className="bg-black p-6">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">All Services ({services.length} total)</h1>
      {services.map((service) => (
        <div key={service.id} className="border p-4 my-2 bg-gray-800 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-white">{service.name}</h2>
          <img src={service.service_image} alt={service.name} className="w-24 h-auto mb-2" />
          <p className="mb-1 text-white">Description: {service.description}</p>
          <p className="mb-1 text-white">Price: ${service.price}</p>
          <p className="mb-2 text-white">Duration: {service.duration} minutes</p>
          <button className="bg-yellow-500 text-black px-4 py-2 mt-2" onClick={() => onShow(service)}>
            Book
          </button>
        </div>
      ))}
    </div>
  );
}
