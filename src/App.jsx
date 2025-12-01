import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, } from "react-router-dom";
import { getLodges } from "./firebase";
import Home from "./pages/home";
import About from "./pages/About";
import Lodges from "./pages/Lodges/Lodges";
import Lodge from "./pages/Lodges/Lodge";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostLodges from "./pages/Host/HostLodges";
import HostLodgesInfo from "./pages/Host/HostLodgesInfo";
import HostLodgesDetails from "./pages/Host/HostLodgesDetails";
import HostLodgesPricing from "./pages/Host/HostLodgesPricing";
import HostLodgesPhotos from "./pages/Host/HostLodgesPhotos";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import AuthRequired from "./components/AuthRequired";
import Login from "./components/Login";
import NotFound from "./pages/NotFound";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/Forest-Haven" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="lodges" element={<Lodges />} loader={() => ({lodges: getLodges()})} />
                <Route path="lodges/:id" element={<Lodge />} />
                <Route element={<AuthRequired />}>
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="lodges" element={<HostLodges />} />
                        <Route path="lodges/:id" element={<HostLodgesInfo />}>
                            <Route index element={<HostLodgesDetails />} />
                            <Route
                                path="pricing"
                                element={<HostLodgesPricing />}
                            />
                            <Route
                                path="photos"
                                element={<HostLodgesPhotos />}
                            />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
