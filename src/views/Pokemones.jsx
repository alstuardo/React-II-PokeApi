import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../store/pokeContext'
import { Container } from 'react-bootstrap'

const Pokemons = () => {
  const { pokemons } = useContext(PokeContext)
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const navigate = useNavigate()

  const handleClick = () => {
    if (selectedPokemon) {
      navigate(`/character/${selectedPokemon}`)
    }
  }

  return (
    <Container className='pokePage'>
      <h1>Selecciona un Pokemon</h1>
      <section>
        <select className='pokemons' value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
          <option value=''>Selecciona un pokemon</option>
          {pokemons.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </section>
      <button className='btn-warning' onClick={handleClick}>Ver detalles</button>
    </Container>
  )
}

export default Pokemons
