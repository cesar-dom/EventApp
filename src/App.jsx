import Theme from './layout/config/theme'
import { Router } from './components/Router'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Theme>
            <Router />
          </Theme>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
