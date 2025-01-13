import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-thin text-green-400 italic"
          style={{ transform: "rotate(-10deg)" }}
        >
          the
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl lg:text-10xl font-bold text-yellow-400"
        >
          Hair Haven
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-5xl lg:text-8xl font-bold text-yellow-400"
        >
          Studio
        </motion.h1>
      </div>
    </header>
  );
}
