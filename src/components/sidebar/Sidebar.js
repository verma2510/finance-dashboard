import "./Sidebar.css";
import {
  MdOutlineTimeline,
  MdOutlineTrendingUp,
  MdAccountCircle,
} from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { IoMdSettings, IoMdHome } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <IoMdHome />
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RiMenuUnfoldLine />
              <Link to="/">Overview</Link>
            </li>
            <li className="sidebarListItem">
              <TbTransactionRupee />
              <Link to="/transactions">Transactions</Link>
            </li>
            <li className="sidebarListItem">
              <MdOutlineTimeline />
              <Link to="/user-analytics">Analytics</Link>
            </li>
            <li className="sidebarListItem">
              <MdOutlineTrendingUp />
              <Link to="/sales">Sales</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdAccountCircle />
              <Link to="/users">User</Link>
            </li>
            <li className="sidebarListItem">
              <IoMdSettings />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
