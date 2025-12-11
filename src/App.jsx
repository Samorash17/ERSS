import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import SOS from './pages/sos'
import Features from './pages/Features'
import Works from './pages/works'
import LoginForm from './pages/LoginForm'
import SuccessStories from './pages/SuccessStories'
import FAQ from './pages/FAQ'
import Media from './pages/Media'
import Feedback from './pages/Feedback'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "request-help",
        element: <SOS />
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "how-it-works",
        element: <Works />,
      },
      {
        path: "citizen-login",
        element: <LoginForm />,
      },
      {
        path: "officer-login",
        element: <LoginForm />,
      },
      {
        path: "success-stories",
        element: <SuccessStories />,
      },
      {
        path: "faqs",
        element: <FAQ />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
