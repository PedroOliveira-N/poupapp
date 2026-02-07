
import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { SearchInput } from './components/SearchInput'
import { Main } from './components/Main'

function App() {

  return (
    <Container>
      <Aside />
        <Main>
          <SearchInput />
        </Main>
    </Container>
  )
}

export default App
