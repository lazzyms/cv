import React, { useState, useEffect } from 'react';
import './App.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import { Header, Summary, Skills, Projects, Experience, Education, Social } from './components'
import local from './resume.json'
function App() {
  const [resume, setResume] = useState()

  useEffect(() => {
    setResume(local)
  }, [])
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center my-5">
          {!resume ? <Spinner animation="border" /> :
            <Col>
              <Header personal={resume.personal} />
              <Summary data={resume.summary} />
              <Skills primary={resume.skills.primary} familiar={resume.skills.familiar} />
              <Projects projects={resume.projects} />
              <Experience jobs={resume.experience} />
              <Education edu={resume.education} />
              <Social links={resume.personal} />
            </Col>
          }
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
