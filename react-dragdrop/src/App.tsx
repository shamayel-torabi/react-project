import { UserProvider } from './context/UserProvider';
import Home from './pages/Home/Home'
function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  )
}

export default App;