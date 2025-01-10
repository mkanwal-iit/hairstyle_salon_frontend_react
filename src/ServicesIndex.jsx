export function ServicesIndex({ services, onShow }) {
  return (
    <div>
      <h1>All Services ({services.length} total)</h1>
      {services.map((service) => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <img src={service.service_image} alt={service.name} style={{ width: "100px", height: "auto" }} />
          <p>Description: {service.description}</p>
          <p>Price: ${service.price}</p>
          <p>Duration: {service.duration} minutes</p>
          <button onClick={() => onShow(service)}>Book</button>
        </div>
      ))}
    </div>
  );
}
