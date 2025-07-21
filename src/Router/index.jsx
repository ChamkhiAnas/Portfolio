import { createBrowserRouter,createRoutesFromElements,Route,Routes } from "react-router";

import HomeLayout from "../Componenets/HomeLayout";
import HomePage from "../Componenets/HomePage";

const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
     <Route 
        path="/"
        element={<HomeLayout />}
      >
        <Route index element={<HomePage />} />

      </Route>
    </>
    )
  );


export default routes;