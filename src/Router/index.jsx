import { createBrowserRouter,createRoutesFromElements,Route,Routes } from "react-router";

import HomeLayout from "../Componenets/HomeLayout";
import HomePage from "../Componenets/HomePage";
import CollagePage from "../Componenets/CollagePage";
import RessourcePage from "../Componenets/RessourcePage";
import MusicPage from "../Componenets/MusicPage";

const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
     <Route 
        path="/"
        element={<HomeLayout />}
      >
        <Route index element={<HomePage />} />

        <Route path="/collage" element={<CollagePage />} />

        <Route path="/ressources" element={<RessourcePage/>}/>

        <Route path="/radio" element={<MusicPage/>}/>



      </Route>
    </>
    )
  );


export default routes;