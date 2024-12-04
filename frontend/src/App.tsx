import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { Found } from './pages/Found'
import { Lost } from './pages/Lost'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/found' element={<Found />} />
          <Route path='/lost' element={<Lost />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App