import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DemoPage from "@/pages/demoPage";

import Error from "./components/error";
import RootLayout from "./components/layout/root-layout";
import Home from "./pages/homePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/demo",
        element: <DemoPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
