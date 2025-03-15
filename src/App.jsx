import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import '/src/App.css'
import HomeComponent from './HomeComponent/HomeComponent'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomeComponent/>}/>
      </Routes>
    </Router>
  )
}

export default App
