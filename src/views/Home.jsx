import { Container } from 'react-bootstrap'
import pikachu from '../assets/img/Pikachu.png'

const Home = () => {
  return (
    <Container className='home'>
      <h1>Bienvenido maestro Pokemon</h1>
      <img src={pikachu} alt='pikachu' className='pikachu' />
    </Container>
  )
}

export default Home
