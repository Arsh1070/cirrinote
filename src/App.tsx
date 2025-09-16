import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layout/root-layout";
import Home from "./pages/homePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
