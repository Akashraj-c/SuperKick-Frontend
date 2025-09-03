
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
import Auth from './pages/Auth'
import AdminHome from './Admin/pages/AdminHome'
import Adminbrands from './Admin/pages/Adminbrands'
import AdminProducts from './Admin/pages/AdminProducts'
import AdminBlogs from './Admin/pages/AdminBlogs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Auth register />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<UserHome />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/apparels' element={<Apparels />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />

        {/* Admin */}
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/adminbrands' element={<Adminbrands />} />
        <Route path='/adminproducts' element={<AdminProducts />} />
        <Route path='/adminblogs' element={<AdminBlogs />} />
      </Routes>
    </>
  )
}

export default App
