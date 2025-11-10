import { SiSellfy } from "react-icons/si";
import { Navigate, Outlet } from "react-router";
import { IoPersonSharp } from "react-icons/io5";

export default function AdminLayout() {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="mx-2">
      <nav className="w-full flex justify-between items-center bg-secondary text-black py-4 px-10 text-2xl font-bold">
        <div className="flex items-center justify-start gap-3 text-3xl">
          <SiSellfy className="text-6xl text-black bg-secondary rounded-full p-2" />
          Admin Page
        </div>
        <div>
          <IoPersonSharp className="w-12 h-12 rounded-full border-2 border-white" />
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
