import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Alert
import Alert from "../components/utils/Tostify";

// User panel
import RequireAuth from "./RequireAuth";
import Register from "../pages/userPanel/Register";
import Login from "../pages/userPanel/Login";
import Home from "../pages/userPanel/Home";
import SubmitArticle from "../pages/userPanel/SubmitArticle";
import DownloadCertificate from "../pages/userPanel/DownloadCertificate";
import Result from "../pages/userPanel/Result";
import ActiveAccount from "../pages/userPanel/ActiveAccount";
import FindMail from "../pages/userPanel/FindMail";
import CheckMsg from "../pages/userPanel/CheckMsg";
import RecoverPassword from "../pages/userPanel/RecoverPassword";

// Admin panel
import AdminRequireAuth from "./AdminRequireAuth";
import RegisterAdmin from "../pages/adminPanel/Register";
import LoginAdmin from "../pages/adminPanel/Login";
import Dashboard from "../pages/adminPanel/Dashboard";
import Articles from "../pages/adminPanel/Articles";
import GradeSelection from "../pages/adminPanel/GradeSelection";
import AnnounceResult from "../pages/adminPanel/AnnounceResult";
import RecoverPasswordAdmin from "../pages/adminPanel/RecoverPassword";
import FindMailAdmin from "../pages/adminPanel/FindMail";
import CheckMsgAdmin from "../pages/adminPanel/CheckMsg";
import ActiveAccountAdmin from "../pages/adminPanel/ActiveAccount";

const Routers = () => {
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        {/* User Panel */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="active/:token" element={<ActiveAccount />}></Route>
        <Route path="findmail" element={<FindMail />}></Route>
        <Route path="checkmsg" element={<CheckMsg />}></Route>
        <Route
          path="recoverpassword/:token"
          element={<RecoverPassword />}
        ></Route>
        <Route
          path=""
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="submitarticle"
          element={
            <RequireAuth>
              <SubmitArticle />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="certificate"
          element={
            <RequireAuth>
              <DownloadCertificate />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="result"
          element={
            <RequireAuth>
              <Result />
            </RequireAuth>
          }
        ></Route>

        {/* Admin panel */}
        <Route path="admin/register" element={<RegisterAdmin />} />
        <Route path="admin/login" element={<LoginAdmin />} />
        <Route path="admin/active/:token" element={<ActiveAccountAdmin />} />
        <Route path="admin/findmail" element={<FindMailAdmin />} />
        <Route path="admin/checkmsg" element={<CheckMsgAdmin />}></Route>
        <Route
          path="admin/recoverpassword/:token"
          element={<RecoverPasswordAdmin />}
        ></Route>
        <Route
          path="admin"
          element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="admin/dashboard"
          element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="admin/articles"
          element={
            <AdminRequireAuth>
              <Articles />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="admin/grade"
          element={
            <AdminRequireAuth>
              <GradeSelection />
            </AdminRequireAuth>
          }
        ></Route>
        <Route
          path="admin/announce"
          element={
            <AdminRequireAuth>
              <AnnounceResult />
            </AdminRequireAuth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
