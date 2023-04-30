import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from '@redux/store'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from "@routes/Home"
import Swap from "@routes/Swap"
import Stake from "@routes/Stake"
import Governance from "@routes/Governance"
import Pools from "@routes/Pools"
import Analytics from "@routes/Analytics"

import HomeLayout from "@layouts/HomeLayout"
import AppLayout from "@layouts/AppLayout"

export default function App() { 
  AOS.init();

  return ( 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route path='/swap' element={<Swap />} />
            <Route path='/stake' element={<Stake />} />
            <Route path='/governance' element={<Governance />} />
            <Route path='/pools' element={<Pools />} />
            <Route path='/analytics' element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  ) 
}
