import Footer from "../Components/Footer/footer";
import Navbar from "./../Components/Navbar/navbar";
import "./NotFoundPage.css";
import image from "./NotFound.png";
function NotFoundPage() {
  return (
    <div>
      <Navbar activeItem="---" menuId="menu2" />
      <div>
        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
          <div class="container-fluid !direction !spacing bdyPosition">
            <div id="wrapper">
              <img src={image} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default NotFoundPage;
