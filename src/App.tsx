import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
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
        element: <SearchPage />,
        //Each route can define a "loader" function to provide data to the route element before it renders.
        loader: searchLoader,
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
