export function AppointmentsIndex({ appointments }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">All Appointments ({appointments.length} total)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border p-4 bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">Appointment ID: {appointment.id}</h2>
            <p className="mb-1 text-white">Date and Time: {new Date(appointment.datetime).toLocaleString()}</p>
            <p className="mb-1 text-white">User ID: {appointment.user_id}</p>
            <p className="mb-1 text-white">Hairstylist ID: {appointment.hairstylist_id}</p>
            <p className="mb-1 text-white">Service ID: {appointment.service_id}</p>
            <p className="mb-1 text-white">Created At: {new Date(appointment.created_at).toLocaleString()}</p>
            <p className="mb-1 text-white">Updated At: {new Date(appointment.updated_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
