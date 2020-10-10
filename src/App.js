import React from 'react';
import './App.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Header, Summary, Skills, Projects, Experience, Education, DreamJob } from './components'
import resume from './resume.json'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center my-5">
          <Col>
            <Header personal={resume.personal} />
            <Summary data={resume.summary} />
            <Skills primary={resume.skills.primary} familiar={resume.skills.familiar} />
            <Projects projects={resume.projects} />
            <Experience jobs={resume.experience} />
            <Education edu={resume.education} />
            <DreamJob dream={resume.dream} />
            <Row className="justify-content-center mt-5 align-items-center rounded">
              <Col>
                <Card className="card-shadow border-0 p-5 bg-dark text-light">
                  <h2>Thanks</h2>
                </Card>
                {/* <Row><h2>Maulik Sompura</h2></Row> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
