import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AccountPageContainer } from "./components/account/AccountBlock";
import ChatPage from "./pages/ChatPage";
import FirstPage from "./pages/FirstPage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyChatPage from "./pages/MyChatPage";
import MyPage from "./pages/MyPage";
import NotfountPage from "./pages/NotFoundPage";
import SetProfilePage from "./pages/SetProfilePage";
import SettingPage from "./pages/SettingPage";
import SignupPage from "./pages/SignUpPage";

const RouteInfo = () => {
  const isLogined = false;
  return (
    <>
      {isLogined ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<ChatPage />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/profile/history" element={<HistoryPage />} />
          <Route path="/profile/myroom" element={<MyChatPage />} />
          <Route path="/profile/setting" element={<SettingPage />} />
          <Route path="*" element={<NotfountPage />} />
        </Routes>
      ) : (
        <AnimatePresence>
          <AccountPageContainer>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/account/login" element={<LoginPage />} />
              <Route path="/account/signup" element={<SignupPage />} />
              <Route
                path="/account/profilesetting"
                element={<SetProfilePage />}
              />
              <Route path="*" element={<NotfountPage />} />
            </Routes>
          </AccountPageContainer>
        </AnimatePresence>
      )}
    </>
  );
};

export default RouteInfo;
