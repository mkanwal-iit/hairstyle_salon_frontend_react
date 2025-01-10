import { Link } from "react-router-dom";
export function ServiceShow({ service }) {
  return (
    <div>
      <h1>Service Information</h1>
      <p>Name: {service.name}</p>
      <p>Description: {service.description}</p>
      <p>Price: ${service.price}</p>
      <p>Duration: {service.duration} minutes</p>
      <img src={service.service_image} alt={service.name} style={{ width: "auto", height: "200px" }} />
      {service.hairstylists && service.hairstylists.length > 0 && (
        <div>
          <h2>Available Hairstylists</h2>
          {service.hairstylists.map((hairstylist) => (
            <div key={hairstylist.id}>
              <h3>{hairstylist.name}</h3>
              <p>Bio: {hairstylist.bio}</p>
              <img
                src={hairstylist.hairstylist_image}
                alt={hairstylist.name}
                style={{ width: "100px", height: "auto" }}
              />
              <Link to={`/appointments/new?service_id=${service.id}&hairstylist_id=${hairstylist.id}`}>
                {" "}
                Book Appointments{" "}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
