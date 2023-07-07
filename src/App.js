import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppHeader from "./pages/AppHeader";
import AppBody from "./pages/AppBody";
import AppFooter from "./pages/AppFooter";
import About from "./pages/About";
import API from "./pages/API";
import Bill from "./pages/Bill";
import Blog from "./pages/Blog";
import Calculators from "./pages/Calculators";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Job from "./pages/Job";

import Press from "./pages/Press";
import Privacy from "./pages/Privacy";

import Setting from "./pages/Setting";

import SplitPay from "./pages/SplitPay";
import SplitPro from "./pages/SplitPro";
import Terms from "./pages/Terms";

import MyRegistration from "./pages/MyRegistration";
import AppResetPass from "./pages/AppResetPass";
import SplitBill from "./pages/SplitBill";
import MyUserList from "./pages/MyUserList";
import AppLogin from "./pages/AppLogin";
import HomeButton from "./pages/HomeButton";
import BillDivider from "./pages/BillDivider";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />

        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<AppBody />} />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<API />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/job" element={<Job />} />
          <Route path="/login" element={<AppLogin />} />
          <Route path="/press" element={<Press />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/resetpass" element={<AppResetPass />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/signup" element={<MyRegistration />} />
          <Route path="/splitpay" element={<SplitPay />} />
          <Route path="/splitpro" element={<SplitPro />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/split-bill"
            element={
              <ProtectedRoute>
                <SplitBill />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <MyUserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/button"
            element={
              <ProtectedRoute>
                <HomeButton />
              </ProtectedRoute>
            }
          />
          <Route
            path="/billdivider"
            element={
              <ProtectedRoute>
                <BillDivider />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
}
// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}
export default App;
