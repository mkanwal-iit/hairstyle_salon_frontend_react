import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ServicesPage } from "./ServicesPage";
import { Footer } from "./Footer";
import { AppointmentsNewPage } from "./AppointmentsNewPage";
import { HeaderPage } from "./HeaderPage";
import { HairstylistsIndexPage } from "./HairstylistIndexPage";
import { HairColorPage } from "./HairColorPage";
import { AppointmentIndexPage } from "./AppointmentIndexPage";
import { LogoutLink } from "./LogoutLink";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/appointments/new",
        element: <AppointmentsNewPage />,
      },
      {
        path: "/",
        element: <HeaderPage />,
      },
      {
        path: "/hairstylists",
        element: <HairstylistsIndexPage />,
        loader: () => axios.get("/hairstylists.json").then((response) => response.data),
      },
      {
        path: "/hair",
        element: <HairColorPage />,
        // loader: () => axios.post("/hair.json").then((response) => response.data),
      },
      {
        path: "/appointments",
        element: <AppointmentIndexPage />,
        loader: () => axios.get("/appointments.json").then((response) => response.data),
      },
      {
        path: "/logout",
        element: <LogoutLink />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
