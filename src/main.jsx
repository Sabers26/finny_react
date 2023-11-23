import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './home/App.jsx'
import Chat from './chat/Chat.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
