import './App.css'
// import { Toaster } from 'react-hot-toast'
import {Outlet} from 'react-router-dom'
import { Header, Footer} from './components';

function App() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    {/* <Toaster/> */}
    </>
  )
}

export default App
