import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { getInfo } from "./store/features/info/infoSlice";
import ScrollToTop from "./scrollToTop";
const CheckPayment = lazy(() => import("./features/order/CheckPayment"));
const OrderDetail = lazy(() => import("./features/account/OrderDetail"));
const OrderCreate = lazy(() => import("./features/order/OrderCreate"));
const Idea = lazy(() => import("./features/idea/Idea"));
const Brand = lazy(() => import("./features/brand/Brand"));
const Privacy = lazy(() => import("./features/privacy/Privacy"));
const PasswordReset = lazy(() => import("./features/account/PasswordReset"));
const OrderList = lazy(() => import("./features/account/OrderList"));
const Delivery = lazy(() => import("./features/account/Delivery"));
const Product = lazy(() => import("./features/Product/Product"));
const AccountLayout = lazy(() => import("./features/account/AccountLayout"));
const CreateAdress = lazy(() => import("./features/account/CreateAdress"));
const EditAdress = lazy(() => import("./features/account/EditAdress"));
const EditProfile = lazy(() => import("./features/account/EditProfile"));
const Account = lazy(() => import("./features/account/Account"));
const Card = lazy(() => import("./features/account/Card"));
const About = lazy(() => import("./features/about/About"));
const Address = lazy(() => import("./features/account/Address"));
const WishList = lazy(() => import("./features/account/WishList"));
const ShopList = lazy(() => import("./features/shop/ShopList"));
const DashLayout = lazy(() => import("./components/DashLayout"));
const HomePage = lazy(() => import("./features/homepage/HomePage"));
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);

  const [userLanguage] = useState();
  const lang = localStorage.getItem("userLanguage");

  if (lang == null || (lang !== "tm" && lang !== "ru")) {
    localStorage.setItem("userLanguage", userLanguage ? userLanguage : "tm");
  }

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/order/check-payment/:id" element={<CheckPayment />} />
          <Route path="/" element={<DashLayout />}>
            <Route index element={<HomePage />} />

            <Route path="shop">
              <Route index element={<ShopList />} />
            </Route>

            <Route path="/account" element={<AccountLayout />}>
              <Route index element={<Account />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="card" element={<Card />} />
              <Route path="address" element={<Address />} />
              <Route path="address/new" element={<CreateAdress />} />
              <Route path="address/:id" element={<EditAdress />} />
              <Route path="profile/:id" element={<EditProfile />} />
              <Route path="orderlist" element={<OrderList />} />
              <Route path="orderDetail/:id" element={<OrderDetail />} />
              <Route path="delivery" element={<Delivery />} />

              <Route path="passwordreset" element={<PasswordReset />} />
            </Route>

            <Route path="aboutUs" element={<About />} />

            <Route path="order/create" element={<OrderCreate />} />

            <Route path="privacy_policy" element={<Privacy />} />
            <Route path="brand" element={<Brand />} />

            <Route path="product/:id">
              <Route index element={<Product />} />
            </Route>


            <Route path="idea/:id">
              <Route index element={<Idea />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
