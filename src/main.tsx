import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  '.././src/styles/global.css'

// import  { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import { Games } from './pages/Games'
// import { CasesGames } from './pages/CasesGames'
// import { Contact } from './pages/Contact'
// import { Home } from './pages/Home'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Games />,
//     children: [
//       { path: '/cases-games',
//       element: <CasesGames />
        
//       },
//       { path: '/contact',
//       element: <Contact />
        
//       },
//     ]  
    
//   },
// ]
// );


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
{/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
)
