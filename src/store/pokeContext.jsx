import { createContext, useState, useEffect } from 'react'

export const PokeContext = createContext()

const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'

const PokeProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setPokemons(data.results)
      } catch (error) {
        console.error('Error fetching pokemons:', error)
      }
    }

    getPokemons()
  }, [])
  return (
    <PokeContext.Provider value={{ pokemons }}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
