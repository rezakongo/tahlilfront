import { useLocation } from "react-router";
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";
import Login from "../Components/Sign/login";
import "./Sign.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SigninPage() {
  let query = useQuery();

  return (
    <div>
      <div className="bg-img" />
      <Navbar activeItem="signin" menuId="menu2" />
      <div id="login">
        <Login open={query.get("s")} />
      </div>
      <Footer />
    </div>
  );
}

export default SigninPage;
