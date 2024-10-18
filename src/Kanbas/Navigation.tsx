import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Help", path: "/Kanbas/Help", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      style={{ width: 120 }}
      className="d-none d-md-block bg-black position-fixed bottom-0 top-0 z-2 list-group rounded-0 border-0"
      id="wd-kanbas-navigation"
    >
      <a
        className="list-group-item bg-black text-white text-center border-0"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
      >
        <img src="/images/NEU.png" alt="NEU" width="100" height="100" />
      </a>
      <Link
        className={`${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        } list-group-item active text-center border-0`}
        to="/Kanbas/Account"
        id="wd-account-link"
      >
        <FaRegCircleUser
          className={`${
            pathname.includes("Account") ? "text-black" : "text-white"
          } fs-1 text`}
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          className={`${
            pathname.includes(link.label)
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item active text-center border-0`}
          to={link.path}
          id="wd-dashboard-link"
        >
          <link.icon className="fs-1 text-danger" />
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
