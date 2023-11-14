import React, { useEffect, useState } from "react"; //eslint-disable-line
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [cities, setcities] = useState({});
  const [isloading, setIsLoading] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setcities(data);
      } catch (error) {
        alert("There was an error loading data....");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isloading={isloading} />}
          ></Route>
          <Route
            path="cities"
            element={<CityList cities={cities} isloading={isloading} />}
          ></Route>
          <Route path="countries" element={<p>Countries</p>}></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
