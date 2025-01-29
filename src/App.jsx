import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import router from './router/route'
import { RouterProvider } from 'react-router-dom'


function App() {


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App
