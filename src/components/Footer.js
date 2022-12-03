import { Container, Row, Col } from "react-bootstrap";
import poza from "../assets/img/poza.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={6}>
            <img src={poza} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://linkedin.com" target="_blank"><img src={navIcon1}/></a>
              <a href="https://facebook.com" target="_blank"><img src={navIcon2}/></a>
              <a href="https://instagram.com" target="_blank"><img src={navIcon3}/></a>
            </div>
            <p>Copyright@ 2022-23. All Rights Reserved to CatConstruct</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
