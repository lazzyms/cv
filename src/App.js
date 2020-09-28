import React from 'react';
import './App.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
