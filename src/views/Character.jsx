import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Badge, Container } from 'react-bootstrap'

const Character = () => {
  const { name } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        const pokemon = {
          id: data.id,
          name: data.name,
          img: data.sprites.other['official-artwork'].front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map(type => type.type.name),
          abilities: data.abilities.map(ability => ability.ability.name)
        }
        setCharacter(pokemon)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchData()
  }, [name])

  if (!character) {
    return <div>Cargando...</div>
  }

  return (
    <Container className='character'>
      <article>
        <img src={character.img} alt={character.name} />
        <h1>{character.name}</h1>
        <p>Altura: {character.height}</p>
        <p>Peso: {character.weight}</p>
        <p>Habilidad: {character.abilities}</p>
        <Badge>{character.types}</Badge>
      </article>
    </Container>

  )
}

export default Character
