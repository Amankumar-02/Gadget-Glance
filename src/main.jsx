import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home, ProductInfoPage, SearchProducts, ProductCart, CheckOut, BuyNow } from './components/index.js';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/productInfo/:userId' element={<ProductInfoPage/>}/>
      <Route path='/search/:userId' element={<SearchProducts/>}/>
      <Route path='/cart' element={<ProductCart/>}/>
      <Route path='/buynow' element={<BuyNow/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);