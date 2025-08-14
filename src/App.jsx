
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserHome from './user/pages/UserHome'
import NewArrival from './user/pages/NewArrival'
import Sneakers from './user/pages/Sneakers'
import Brands from './user/pages/Brands'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/brands' element={<Brands />} />
      </Routes>
    </>
  )
}

export default App
