import axios from "axios";
import { Header } from "./Header";
import { AppointmentsPage } from "./AppointmentsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <AppointmentsPage />
      <Footer />
    </div>
  );
}

export default App;
