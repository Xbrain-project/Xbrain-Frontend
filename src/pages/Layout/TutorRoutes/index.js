import { Outlet } from "react-router-dom";

import NavbarStudent from "../../../components/navbar/NavbarStudent";
import NavbarTutor from "../../../components/navbar/NavbarTutor";

import { useSelector } from "react-redux";
const Layout = ({ role }) => {
  var { user } = useSelector((state) => ({ ...state }));
  const checkRole = () => {
    if (user.role === "student") {
      return <NavbarStudent />;
    } else if (user.role === "tutor") {
      return <NavbarTutor />;
    }
  };

  return (
    <body className="flex flex-col min-h-screen ">
      <header>{checkRole()}</header>
      <main class="flex-grow">
        <Outlet />
      </main>
    </body>
  );
};

export default Layout;