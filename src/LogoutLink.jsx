import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition-colors"
    >
      Logout
    </a>
  );
}
