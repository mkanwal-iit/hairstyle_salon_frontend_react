export function AppointmentsIndex({ appointments }) {
  return (
    <div>
      <h1>All Appointments ({appointments.length}) total</h1>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <h2>Appointment ID: {appointment.id}</h2>
          <p>Date and Time: {new Date(appointment.datetime).toLocaleString()}</p>
          <p>User ID: {appointment.user_id}</p>
          <p>Hairstylist ID: {appointment.hairstylist_id}</p>
          <p>Service ID: {appointment.service_id}</p>
          <p>Created At: {new Date(appointment.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(appointment.updated_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
