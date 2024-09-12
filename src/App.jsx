// eslint-disable-next-line no-unused-vars
import React from "react"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Namecard from "./pages/Namecard";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

//<About /><Projects /><Contact />
function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[{
      path:"/",
      element: <div>
        <Namecard />
        <About/>
        <Projects />
        <Contact />
      </div>
    }

  ]
  }
])
  return (
    
      <RouterProvider router={router} />
  
  );
}

export default App
