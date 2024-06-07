
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Menu from './Pages/Menu'


import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    < >

      <BrowserRouter>
      <div className='z-10'>
      <Header />
      </div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
       
    </>
      
    
  )
}

export default App
