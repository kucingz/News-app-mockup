import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = () => {
  return (
    <Navbar bg="color" variant="dark" fixed="top">
      <Container  className="justify-content-md-center">
        <Link className="link" to={{ 
      pathname:'/'}}>
          <Navbar.Brand><img src/>
          MIND-BLOWING NEWS</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
