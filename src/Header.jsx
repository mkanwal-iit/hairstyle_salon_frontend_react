import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header({ services, onShow }) {
  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link to="/signup" className="text-white hover:text-yellow-400 transition-colors">
            Signup
          </Link>
          <Link to="/login" className="text-white hover:text-yellow-400 transition-colors">
            Login
          </Link>
          <Link to="/services" className="text-white hover:text-yellow-400 transition-colors">
            Services
          </Link>
          <Link to="/appointments/new" className="text-white hover:text-yellow-400 transition-colors">
            New Appointment
          </Link>
          <Link to="/hairstylists" className="text-white hover:text-yellow-400 transition-colors">
            Hairstylists
          </Link>
          <LogoutLink className="text-white hover:text-yellow-400 transition-colors" />
        </div>
      </nav>
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">Welcome to My Amazing Salon</h1>
      </div>
    </header>
  );
}
