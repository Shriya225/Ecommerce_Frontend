import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login.jsx';
import ProductListContainer from './components/ProductListContainer.jsx'
import OrderContainer from './components/OrderContainer.jsx'
import AddProduct from './components/AddProduct.jsx'
const router = createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/list',
        element: <ProductListContainer />,
      },
      {
        path: '/orders',
        element: <OrderContainer />,
      },
      {
        path: '/addProduct',
        element: <AddProduct />,
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
