import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="bg-black shadow-lg">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors">
            Home
          </Link>
          {localStorage.email ? (
            <>
              <Link
                to="/services"
                className="bg-green-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                Services
              </Link>
              <Link
                to="/appointments/new"
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                New Appointment
              </Link>
              <Link
                to="/hairstylists"
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                Hairstylists
              </Link>
              <Link
                to="/hair"
                className="bg-red-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                Virtual HairColor TryOn
              </Link>
              <Link
                to="/appointments"
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                All Appointments
              </Link>
              <LogoutLink className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors" />
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="text-center py-2">
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
