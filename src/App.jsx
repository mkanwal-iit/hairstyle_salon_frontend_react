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

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
