
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Pages/Home/Home'
import Blog from './components/Pages/Blog/Blog'
import About from './components/Pages/About/About'
import Layout from './components/Layout'
import Detail from './components/Detail/Detail'

function App() {


  const routing = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:slug", element: <Detail /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  // {
  //   basename: "/react-project",
  // }
);











  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App
