import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
              <div>
                <span className="tagline">Welcome to CatCheck!</span>
                <br></br>
                <h1>We are happy to see you!</h1>
                <br></br>
                <p>We have a new app. Go Check Out CatCheck on the App Store!</p>
                <br></br>
              </div>
        </Row>
      </Container>
    </section>
  )
}
