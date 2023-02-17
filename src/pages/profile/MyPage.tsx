import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <div>유저 페이지</div>
      <Outlet />
    </>
  );
};

export default MyPage;
