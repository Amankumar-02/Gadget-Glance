import './App.css'
import { Toaster } from 'react-hot-toast'
import {Outlet} from 'react-router-dom'
import { Header, Footer} from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet/>
    <Footer />
    <Toaster/>
    </>
  )
}

export default App
