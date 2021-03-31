
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row ,Col} from 'react-bootstrap';


function HomePage() {
  
  return (
      <Container left className="pageBody">
        <Row>
          NavBar
        </Row>
        <Row className="bdy">
          <div className="slideBar">
            SlideShow
          </div>
        </Row>
        <Row className="bdy">
            <Col md={3} sm={6} xs={12}>
              <div className="Tops">
                Top10 Musics
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="Tops">
              Top10 Albums
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="Tops">
              Top10 Artists
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="Tops">
              Top10 Genres 
              </div>
            </Col>
          
        </Row>
        <Row className="Foot">
          <Col md={4} sm={4} xs={12}>
              <div>
                Provided by HexClan Team
              </div>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <div>
               مطابق قوانین جمهوری اسلامی ایران
            </div>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <div>
              پیوند ها 
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default HomePage;