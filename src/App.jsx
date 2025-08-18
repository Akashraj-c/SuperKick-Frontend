
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserHome from './user/pages/UserHome'
import NewArrival from './user/pages/NewArrival'
import Sneakers from './user/pages/Sneakers'
import Brands from './user/pages/Brands'
import Apparels from './user/pages/Apparels'
import Cart from './user/pages/Cart'
import WishList from './user/pages/WishList'
import Blogs from './user/pages/Blogs'
import ProductDetails from './user/pages/ProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/apparels' element={<Apparels />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/productdetails' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
