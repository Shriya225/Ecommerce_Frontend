import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import CartContainer from './components/CartContainer.jsx';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login.jsx';
import Collection from './components/Collection.jsx';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/ProductDetail.jsx';
import OrderPage from './components/OrderPage.jsx';
import Checkout from './components/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cart',
        element: <CartContainer/>,
      },
      {
        path: '/collection',
        element: <Collection/>,  
      },
      {
        path:'/product/:id',
        element:<ProductDetail/>
      },
      {
        path:'/orders',
        element:<OrderPage/>
      },
      {
        path:'/checkout',
        element:<Checkout/>
      },
    ]
  },
  {path:"*",
    element:<div>404 Error</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
