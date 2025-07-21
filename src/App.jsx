import { RouterProvider } from "react-router";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from "./Router";

export default function App() {
  return <RouterProvider router={routes} />;
}