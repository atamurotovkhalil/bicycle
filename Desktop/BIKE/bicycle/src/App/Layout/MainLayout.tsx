import Navbar from "../../Widgets/Navbar";
import Footer from "../../Widgets/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout