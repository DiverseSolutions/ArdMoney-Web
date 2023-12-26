import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "@redux/store";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "@routes/Home";
import Swap from "@routes/Swap";
import Stake from "@routes/stake";
import SingleStake from "@routes/stake/SingleStake";
import Governance from "@routes/Governance";
import Pools from "@routes/pool/Pools";
import Analytics from "@routes/Analytics";
import HomeLayout from "@layouts/HomeLayout";
import AppLayout from "@layouts/AppLayout";
import Aggregator from "@routes/Aggregater";
import SinglePool from "@routes/pool/SinglePool";

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
            <Route path="/swap" element={<Swap />} />
            <Route path="/stake" element={<SingleStake />} />
            {/* <Route path="/stake/:id" element={<SingleStake />} /> */}
            <Route path="/governance" element={<Governance />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/pool/:poolId" element={<SinglePool />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/aggregator" element={<Aggregator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
