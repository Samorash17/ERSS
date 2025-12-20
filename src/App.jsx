import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import SOS from './pages/sos'
import Features from './pages/Features'
import Works from './pages/works'
import LoginForm from './pages/LoginForm'
import SuccessStories from './pages/SuccessStories'
import FAQ from './pages/FAQ'
import Media from './pages/Media'
import Login from './pages/officer_login'

const RootLayout = () => {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
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
        element: <Login />,
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
      // {
      //   path: "feedback",
      //   element: <Feedback />,
      // },
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
