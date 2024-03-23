import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import pokeBrand from '../assets/img/pokeBrand.png'

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div>
      <Navbar bg='secondary' data-bs-theme='dark'>
        <Navbar.Brand className='navbar-nav ml-auto' onClick={handleClick}>
          <img src={pokeBrand} alt='marca' className='brand' />
        </Navbar.Brand>
        <Container>
          <Nav className='default'>
            <NavLink to='/' className={setActiveClass}>Home</NavLink>
            <NavLink to='/pokemones' className={setActiveClass}>Pokemones</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
