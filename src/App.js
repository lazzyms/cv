import React, { useState, useEffect } from 'react';
import './App.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import { Header, Summary, Skills, Projects, Experience, Education, DreamJob, Social } from './components'
import local from './resume.json'
import axios from 'axios';
function App() {
  const [resume, setResume] = useState()

  useEffect(() => {
    axios.get('https://api.jsonbin.io/b/' + process.env.REACT_APP_BIN + '/latest', { headers: { 'secret-key': process.env.REACT_APP_JSONBIN.replace(/_/g, '$') } }).then((res) => {
      if (res.status === 200) {
        setResume(res.data)
      }
    }).catch(err => {
      console.error(err)
      setResume(local)
    })
  })
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
              <DreamJob dream={resume.dream} />
              <Social links={resume.personal} />
            </Col>
          }
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
