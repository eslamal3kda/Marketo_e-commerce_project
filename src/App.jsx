import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './style/app.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";


export default function App() {
    const queryClient = new QueryClient();
    const Routing = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { path: "", element: <HomePage />},
                { path: "/pages", element: <h2>Pages Page</h2> },
                { path: "/shop", element: <h2>shop Page</h2> },
                { path: "/blogs", element: <h2>blogs Page</h2> },
                { path: "/gallery", element: <h2>gallery Page</h2> },
                { path: "/wishlist", element: <h2>Wishlist Page</h2> },
                { path: '*', element: <h2>Page Not Founded</h2> },
            ],
        },
    ]);
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={Routing} />
        </QueryClientProvider>
    );
}
