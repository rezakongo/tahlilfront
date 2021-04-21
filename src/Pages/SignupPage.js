import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";
import SignUp from "../Components/Sign/signup";
import "./Sign.css";

function SignupPage() {
  return (
    <div>
      <div className="bg-img" />
      <Navbar activeItem="Sign up" menuId="menu2" />
      <div id="login">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}

export default SignupPage;
