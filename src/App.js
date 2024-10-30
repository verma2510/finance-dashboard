import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Transaction from "./pages/transactions/Transaction";
import UserAnalytics from "./pages/userAnalytics/UserAnalytics";
import Sales from "./pages/sales/Sales";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/user-analytics" element={<UserAnalytics />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
