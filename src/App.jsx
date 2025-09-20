
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
import MenProducts from './user/pages/MenProducts'
import WomenProducts from './user/pages/WomenProducts'
import SelectedBrandProducts from './user/pages/SelectedBrandProducts'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import BlogDetails from './user/pages/BlogDetails'
import AllComments from './Admin/pages/AllComments'
import Profile from './user/pages/Profile'

function App() {
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true)
    }, 1000)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/register' element={<Auth register />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={isloading ? <UserHome /> : <Preloader />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/apparels' element={<Apparels />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/menproducts' element={<MenProducts />} />
        <Route path='/womenproducts' element={<WomenProducts />} />
        <Route path='/selectedbrandproducts/:brandName' element={<SelectedBrandProducts />} />
        <Route path='/blogdetails/:id' element={<BlogDetails />} />

        {/* Admin */}
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/adminbrands' element={<Adminbrands />} />
        <Route path='/adminproducts' element={<AdminProducts />} />
        <Route path='/adminblogs' element={<AdminBlogs />} />
        <Route path='/allcomments/:id' element={<AllComments />} />
      </Routes>
    </>
  )
}

export default App
