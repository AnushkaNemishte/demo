import './App.css';
import { Col, Container, Row} from 'react-bootstrap'
import SideBar from './Components/SideBar';
import MainContent from './Components/MainContent';

function App() {
  return (
    
      <Container fluid={true} className="px-0">
        <Row noGutters>
          <Col md={3} lg={3}  className="px-0 pe-1">
            <SideBar/>
          </Col>
          <Col md={9} lg={9}  className="px-0 ">
          <MainContent/>
          </Col>
        </Row>
      </Container>
    
  );
}

export default App;
