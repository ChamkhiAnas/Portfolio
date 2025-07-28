import { createBrowserRouter,createRoutesFromElements,Route,Routes } from "react-router";

import HomeLayout from "../Componenets/HomeLayout";
import HomePage from "../Componenets/HomePage";
import CollagePage from "../Componenets/CollagePage";

const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
     <Route 
        path="/"
        element={<HomeLayout />}
      >
        <Route index element={<HomePage />} />

        <Route path="/collage" element={<CollagePage />} />


      </Route>
    </>
    )
  );


export default routes;