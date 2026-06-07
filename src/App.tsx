import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login-page";
import { pageRoutes } from "./libs/constants/page-constants";


function App() {
  const router = createBrowserRouter([
    {
      path: pageRoutes.login,
      element: <LoginPage/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
