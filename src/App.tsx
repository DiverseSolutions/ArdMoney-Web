import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "@routes/Home"
import Swap from "@routes/Swap"
import HomeLayout from "@layouts/HomeLayout"

export default function App() { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='/swap' element={<Swap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}
