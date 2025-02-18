import { Suspense } from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./App/Layout/MainLayout";
import MainPage from "./Features/Home/MainPage";
import MountainBikes from "./Pages/Bikes/SortingBikes";
import ProductDetail from "./Pages/Bikes/BikeDetail/ProductDetail";
import Cart from "./Features/Signup&Login/Cart/Cart";
import PlacingOrder from "./Features/Signup&Login/Cart/PlacingOrder";
import Contact from './Pages/Contact/Contact';
import Workshop from "./Pages/BicycleWorkshop/Workshop";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Agreement from "./Pages/UserAgreement/Agreement";
import Guarantees from "./Pages/Guarantees/Guarantees";
import Storage from "./Pages/Storage/Storage";
import PaymentDelivery from "./Pages/PaymentDelivery/PaymentDelivery";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/Blog/BlogDetail";
import MyPage from "./Features/UserPage/index"
import FrameAndForks from "./Pages/FrameAndForks/FrameAndForks";
import WheelsAndTires from "./Pages/WheelsAndTires/WheelsAndTires";
import BrakingSystem from "./Pages/BrakingSystem/BrakingSystem";
import Drivetrain from "./Pages/Drivetrain/Drivetrain";
import HandlebarAndStem from "./Pages/HandlebarAndStem/HandlebarAndStem";
import AddProduct from "./App/Admin/AddProduct";
import SignUp from "./Features/Signup&Login/Signup/index"
import AddSpareParts from "./App/Admin/AddSpareParts";
import Login from "./Features/Signup&Login/Login/index"
import AdminPage from "./App/Admin";

const App = () => {
  return (
    <div className="font-mont">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/mountainbikes" element={<MountainBikes />} />
            {/* <Route path="/catalog" element={<CatalogPage />} /> */}
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlacingOrder/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/guarantees" element={<Guarantees />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/payment-delivery" element={<PaymentDelivery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/frame-and-forks" element={<FrameAndForks />} />
            <Route path="/wheels-and-tires" element={<WheelsAndTires />} />
            <Route path="/braking-system" element={<BrakingSystem />} />
            <Route path="/drivetrain" element={<Drivetrain />} />
            <Route path="/handlebar-and-stem" element={<HandlebarAndStem />} />
            <Route path="/signup" element={<SignUp />} />  {/* Admin */}
            <Route path="/login" element={<Login />} />  {/* Admin */}
            
          </Route>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-spare-parts" element={<AddSpareParts />} />  {/* Admin */}
          <Route path="/admin/admin" element={<AdminPage />} />
          {/* <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/admin" element={<AdminPage />} />
          </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
