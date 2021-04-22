import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";
import Login from "../Components/Sign/login";
import "./Sign.css";
function SigninPage() {
  return (
    <div>
      <div className="bg-img" />
      <Navbar activeItem="" menuId="menu1" />
      <div id="login">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default SigninPage;
