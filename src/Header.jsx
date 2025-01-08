import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> |<Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/">Services</Link> | <Link to="/appointments/new">New Appointment</Link> |
        <LogoutLink />
      </nav>
    </header>
  );
}
