import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Details from "./components/Details";
import LandingPage from "./components/LandingPage";
import PortfolioLayout from "./components/PortfolioLayout";
import RightSection from "./components/RightSection";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio" element={<PortfolioLayout />}>
        <Route index element={<RightSection />} />
      </Route>
      <Route path="/details/:id" element={<Details />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
