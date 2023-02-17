import React from "react";
import { Routes, Route } from "react-router-dom";
import { AccountPageContainer } from "../containers/account/AccountContainer";
import { AuthRoute } from "./AuthRoute";
import ChatPage from "./chat/ChatPage";
import FirstPage from "./account/FirstPage";
import HistoryPage from "./profile/HistoryPage";
import HomePage from "./Home/HomePage";
import MyChatPage from "./profile/MyChatPage";
import MyPage from "./profile/MyPage";
import NotfountPage from "./NotFoundPage";
import SettingPage from "./profile/SettingPage";
import LoginPage from "./account/LoginPage";
import SignupPage from "./account/SignUpPage";
import SetProfilePage from "./account/SetProfilePage";

const RouteInfo = () => {
  return (
    <Routes>
      <Route element={<AccountPageContainer />}>
        <Route
          path="/"
          element={
            <AuthRoute authAccess={false}>
              <FirstPage />
            </AuthRoute>
          }
        />
        <Route
          path="/account/login"
          element={
            <AuthRoute authAccess={false}>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path="/account/signup"
          element={
            <AuthRoute authAccess={false}>
              <SignupPage />
            </AuthRoute>
          }
        />
        <Route
          path="/account/profilesetting"
          element={
            <AuthRoute authAccess={true}>
              <SetProfilePage />
            </AuthRoute>
          }
        />
      </Route>
      <Route
        path="/home"
        element={
          <AuthRoute authAccess={true}>
            <HomePage />
          </AuthRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthRoute authAccess={true}>
            <MyPage />
          </AuthRoute>
        }
      >
        <Route path="history" element={<HistoryPage />} />
        <Route path="myroom" element={<MyChatPage />} />
        <Route path="setting" element={<SettingPage />} />
      </Route>
      <Route path="/room/:id" element={<ChatPage />} />
      <Route path="*" element={<NotfountPage />} />
    </Routes>
  );
};

export default RouteInfo;
