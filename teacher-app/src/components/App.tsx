import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardRoot from "../routes/dashboard/DashboardRoot";
import "../css/App.css";
import Login from "../routes/Login";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "../routes/account/Signup";
import ForgotPassword from "../routes/password/ForgotPassword";
import ConfirmAccount from "../routes/confirm/ConfirmAccount";
import ResetPassword from "../routes/password/ResetPassword";
import ImportLoad from "../routes/import/ImportLoad";
import ImportParse from "../routes/import/ImportParse";
import Account from "../routes/account/Account";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types/AppStateType";
import { clearExpired, clearRedirectTo } from "../store/actions";
import NotFound from "./NotFound";
import NavButtons from "./NavButtons";
import Students from "../routes/student/Students";
import RequireAuth from "./RequireAuth";
import SendConfirmationEmail from "../routes/confirm/SendConfirmationEmail";
import {
  useGetAnswerLogQuery,
  useGetQuestionMetadataQuery,
  useGetStudentListQuery,
} from "../api";
import QuestionList from "../routes/question/QuestionList";
import Expired from "../routes/account/Expired";

function App() {
  const redirectTo = useSelector(
    (state: StateType) => state.appState.redirectTo
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt = useSelector((state: StateType) => state.appState.jwt);
  const refresh = useSelector((state: StateType) => state.appState.refresh);
  const tokenExpired = useSelector(
    (state: StateType) => state.appState.tokenExpired
  );
  useGetStudentListQuery({ jwt: jwt ?? "", refresh });
  useGetAnswerLogQuery({ jwt: jwt ?? "", refresh });
  useGetQuestionMetadataQuery(null);

  useEffect(() => {
    if (redirectTo) {
      dispatch(clearRedirectTo());
      navigate(redirectTo);
    }
  }, [redirectTo, navigate, dispatch]);

  useEffect(() => {
    if (tokenExpired) {
      dispatch(clearExpired());
      navigate("/expired");
    }
  }, [tokenExpired, navigate, dispatch]);

  return (
    <div className="app">
      <Card>
        <CardHeader>
          <Header />
        </CardHeader>
        <CardBody>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="expired" element={<Expired />} />
            <Route path="confirm-account" element={<ConfirmAccount />} />
            <Route path="confirm-account/:code" element={<ConfirmAccount />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="reset-password/:code" element={<ResetPassword />} />
            <Route
              path="send-confirmation-email"
              element={<SendConfirmationEmail />}
            />

            <Route
              path="students"
              element={
                <RequireAuth>
                  <NavButtons>
                    <Students />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <NavButtons>
                    <DashboardRoot />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="dashboard/:min"
              element={
                <RequireAuth>
                  <NavButtons>
                    <DashboardRoot />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="import/1"
              element={
                <RequireAuth>
                  <NavButtons>
                    <ImportLoad />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="import/2"
              element={
                <RequireAuth>
                  <NavButtons>
                    <ImportParse />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="account"
              element={
                <RequireAuth>
                  <NavButtons>
                    <Account />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="import/*"
              element={
                <RequireAuth>
                  <NavButtons>
                    <ImportLoad />
                  </NavButtons>
                </RequireAuth>
              }
            />
            <Route
              path="questions"
              element={
                <RequireAuth>
                  <NavButtons>
                    <QuestionList />
                  </NavButtons>
                </RequireAuth>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CardBody>
        <CardFooter>
          <Footer />
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
