import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Users from './components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/coffe'),
   
    
  },
  {
    path: '/add',
    element: <AddCoffe></AddCoffe>
  },
  {
    path: '/update/:id',
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({ params }) => fetch(`https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/coffe/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffe-store-server-31nvpvsvh-joy-mahmuds-projects-22f2ffa2.vercel.app/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
