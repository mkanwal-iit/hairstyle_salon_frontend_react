import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const homeBackgroundUrl = "https://i.etsystatic.com/16895977/r/il/69634d/4897961404/il_570xN.4897961404_7839.jpg";
  return (
    <header>
      <nav className="flex flex-col items-center justify-center text-center">
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> |<Link to="/login">Login</Link> |{" "}
        <Link to="/services">Services</Link> |<Link to="/appointments/new">New Appointment</Link> |
        <LogoutLink />
        <div>
          <p className="text-4xl font-bold">Welcome to My Amazing Salon</p>
          <img
            src={homeBackgroundUrl}
            alt="Home"
            className="bg-cover bg-center h-[80vh] text-white flex flex-col justify-center items-center text-center"
          />
        </div>
      </nav>
    </header>
  );
}
