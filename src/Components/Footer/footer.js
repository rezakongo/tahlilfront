
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">Hexbeat</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 iconContainer">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i>
                    <Facebook />
                  </i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <Twitter />
                </a>
              </li>
              <li>
                <a className="github" href="#">
                  <GitHub />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
