import { Col, Container, Row} from 'react-bootstrap'
import SideBar from './Components/SideBar';
import MainContent from './Components/MainContent';

function App() {
  return (
    
      <Container fluid={true} className="px-0">
        <Row noGutters>
          <Col  className="w-auto px-0 pe-1">
            <SideBar/>
          </Col>
          <Col md={10} lg={10}  className="px-0 ">
          <MainContent/>
          </Col>
        </Row>
      </Container>
    
  );
}

export default App;
