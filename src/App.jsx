import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import Layout from './components/layout/layout'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import ProductsList from './pages/products-list'
import SingleProduct from './pages/single-product'
import LayoutAdmin from './components/layout/layoutAdmin'
import AllProduct from './pages/all-product'
import CreateProduct from './pages/create-product'
import UpdateProduct from './pages/update-product'

function App() {

  return (
    <>
      <BrowserRouter>
          <main>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/layout' element={<Layout/>}>
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/products' element={<Products/>}>
                  <Route index element={<ProductsList/>} />
                  <Route path=':id' element={<SingleProduct/>} />
                </Route>
              </Route>
              <Route path='/layoutAdmin' element={<LayoutAdmin/>}>
                <Route path='/all-product' element={<AllProduct/>} />
                <Route path='/create-product' element={<CreateProduct/>} />
                <Route path='/update-product' element={<UpdateProduct/>} />
                <Route path='/delete-product' element={<DeleteProduct/>} />
              </Route>
            </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
