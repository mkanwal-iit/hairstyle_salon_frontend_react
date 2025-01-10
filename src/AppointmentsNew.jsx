import { useSearchParams } from "react-router";
export function AppointmentNew({ onCreate }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Date and Time: <input name="datetime" type="datetime-local" />
        </div>
        <div>
          Hairstylist ID:{" "}
          <input defaultValue={searchParams.get("hairstylist_id")} name="hairstylist_id" type="number" />
        </div>
        <div>
          Service ID:
          <input defaultValue={searchParams.get("service_id")} name="service_id" type="number" />
        </div>
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
}
