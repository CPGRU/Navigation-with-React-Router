import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/packages/:name',
        element: <DetailsPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
