import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const homeBackgroundUrl = "https://i.etsystatic.com/16895977/r/il/69634d/4897961404/il_570xN.4897961404_7839.jpg";
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> |<Link to="/login">Login</Link> |{" "}
        <Link to="/services">Services</Link> |<Link to="/appointments/new">New Appointment</Link> |
        <LogoutLink />
        <div>
          <p style={{ fontSize: "4rem", fontWeight: "bold" }}>Welcome to My Amazing Salon</p>
          <img
            src={homeBackgroundUrl}
            alt="Home"
            style={{
              backgroundImage: `url(${homeBackgroundUrl})`,
              backgroundPosition: "center",
              height: "80vh", // This sets the height of the image background to fill the screen
              color: "white", // Sets text color to white for better readability
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          />
        </div>
      </nav>
    </header>
  );
}
