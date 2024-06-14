import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NoteForm from './pages/NoteForm.tsx'
import AllNotes from './pages/AllNotes.tsx'


const router = createBrowserRouter(

  [

    {

      path: '/',
      element: <App/>,
      children:[{
        index: true,
        element: <AllNotes/>
      },
     {
      path: '/add-note',
      element: <NoteForm/>
     }
      ]
    }
    
  ]

)

ReactDOM.createRoot(document.getElementById('root')!).render(

  
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
