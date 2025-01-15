import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 p-12 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          <ul className="mb-4">
            {errors.map((error) => (
              <li key={error} className="text-red-500">
                {error}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Email:</label>
              <input name="email" type="email" className="w-full p-3 rounded bg-gray-700 border border-gray-600" />
            </div>
            <div>
              <label className="block mb-1">Password:</label>
              <input
                name="password"
                type="password"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              />
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-black p-3 rounded mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
