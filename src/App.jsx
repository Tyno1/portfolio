import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import RightSection from "./components/RightSection";
import HomeLayout from "./components/HomeLayout";
import Details from "./components/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
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
