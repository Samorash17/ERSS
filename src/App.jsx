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
import OfficerLogin from './pages/officer_login';
import SuccessStories from './pages/SuccessStories'
import FAQ from './pages/FAQ'
import Media from './pages/Media'
import Feedback from './pages/Feedback'

// Admin Components
import AdminLayout from './layouts/AdminLayout'
import PrivateRoute from './components/PrivateRoute'
import DashboardHome from './pages/admin/DashboardHome'
import ManageStories from './pages/admin/ManageStories'
import ManageFAQs from './pages/admin/ManageFAQs'
import ManageGallery from './pages/admin/ManageGallery'

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
        element: <OfficerLogin />,
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
      // Admin Routes
      {
        path: "admin",
        element: <PrivateRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              { index: true, element: <DashboardHome /> },
              { path: "stories", element: <ManageStories /> },
              { path: "faqs", element: <ManageFAQs /> },
              { path: "gallery", element: <ManageGallery /> }
            ]
          }
        ]
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
