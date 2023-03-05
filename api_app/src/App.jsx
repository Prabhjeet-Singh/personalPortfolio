import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/header";

import { Routes, Route } from "react-router-dom";
import SingleCountry from "./Components/SingleCountry";

function App() {
  const [light, setLight] = useState(false);
  const [country, setCountry] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [category, setCategory] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const allCategories = [...new Set(data.map((country) => country.region))];
      setCategory(allCategories);
      setCountry(data);
      setAllCountries(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  //  native name, population,region,subregion,capital
  // top level domain, currencies, language ,border countries

  const filterValue = async (value) => {
    const data = allCountries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setCountry(data);
  };

  const continent = async (value) => {
    const data = allCountries.filter((country) => country.region === value);
    setCountry(data);
  };
  // useEffect(()=>{

  // },[])
  return (
    <div className={light ? "light" : "dark"} id="main">
      <Routes>
        <Route path="/"
          element={
            <Header
              light={light}
              setLight={setLight}
              filterValue={filterValue}
              continent={continent}
              country={country}
              category={category}
            />
          }
        ></Route>
        <Route path="/:code" exact element={<SingleCountry country={country} light={light} setLight={setLight}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
