import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


export default function App() {
  const queryClient = new QueryClient()
  const Routing = createBrowserRouter([
    {path:'',element:<h1>Hello For Project</h1>}
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routing}/>
    </QueryClientProvider>
  )
}
