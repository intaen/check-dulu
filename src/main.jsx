import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthPage from './pages/AuthPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage/>,
  },
  {
    path: "/home",
    element: <App/>,
    children: [
      {
        path: "/home",
        element:
        <ProtectedRoute>
          <ProductPage/>
        </ProtectedRoute> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
  </StrictMode>,
)
