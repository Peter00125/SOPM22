import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/github.png";
import projImg2 from "../assets/img/expogo.png";
import projImg3 from "../assets/img/react.png";
import projImg4 from "../assets/img/visual.png";
import imgPeter from "../assets/img/peter.png";
import imgLaura from "../assets/img/laura.png";
import imgAlexandra from "../assets/img/alexandra.png";
import imgMihail from "../assets/img/mihail.png";
import imgss1 from "../assets/img/ss1.png";
import imgss3 from "../assets/img/ss3.png";
import imgss5 from "../assets/img/ss5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Visual Studio Code",
      description: "Used as a code editor for development, debugging and task running",
      imgUrl: projImg4,
    },
    {
      title: "Expo Go ",
      description: "Used for code and running projects on browser and phones",
      imgUrl: projImg2,
    },
    {
      title: "React Native",
      description: "Used for building user interfaces",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "",
    },
    {
      title: "GitHub",
      description: "Used for team communication and project sharing",
      imgUrl: projImg1,
    },

  ];

  const personal = [
    {
      title: "Laura Patrasc-Luta",
      description: "Chief executive officer (CEO)",
      imgUrl: imgLaura,
    },
    {
      title: "Cristian Peter",
      description: "Chief operating officer (COO)",
      imgUrl: imgPeter,
    },
    {
      title: "Alexandra Covalea",
      description: "Chief technology officer (CTO)",
      imgUrl: imgAlexandra,
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Mihail Iorga",
      description: "Backend Developer",
      imgUrl: imgMihail,
    },

  ];


  const ScreenShots = [
    
    {
      title: "Home screen",
      imgUrl: imgss1
    },
    {
      title: "Welcome Screen",
      imgUrl: imgss3
    },
    {
      title: "Add tasks Screen",
      imgUrl: imgss5
    },
  ]
 
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Project</h2><br></br>
                <p>Hi! In this section you can see the Technologies we have used to make this app, you can meet the team and see screenshots from the app!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Technologies used</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Meet the team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">App ScreenShots</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        { 
                          personal.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        { 
                          ScreenShots.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

