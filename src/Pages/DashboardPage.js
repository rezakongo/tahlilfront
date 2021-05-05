import Header from "../Components/Sidebar/Dashboard.js";
import Navbar from "./../Components/Navbar/navbar";
import "./Dashboard.css";
function DashboardPage() {
  return (
    <div>
      <Navbar activeItem="Artists" menuId="menu2" />
      <Header />
    </div>
  );
}

export default DashboardPage;
