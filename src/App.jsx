import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Character from './views/Character'
import Navigation from './components/Navigation'
import PokeProvider from './store/pokeContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PokeProvider>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemones' element={<Pokemones />} />
            <Route path='/character/:name' element={<Character />} />
          </Routes>
        </PokeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
