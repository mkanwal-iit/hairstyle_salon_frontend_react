import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="max-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-20 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6">Signup</h1>
        <ul className="mb-4">
          {errors.map((error) => (
            <li key={error} className="text-red-500">
              {error}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name:</label>
            <input name="name" type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input name="email" type="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input name="password" type="password" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
          </div>
          <div>
            <label className="block mb-1">Password confirmation:</label>
            <input
              name="password_confirmation"
              type="password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded mt-4">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
