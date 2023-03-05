import { React } from "react";
import Countries from "./countries";
import "./header.css";
import MainHeader from "./MainHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({
  light,
  setLight,
  filterValue,
  category,
  continent,
  country,
}) => {
  //   console.log(country.filter((country)=>country.name.toLowerCase().includes(value.toLowerCase())));

  return (
    <>
    <MainHeader light={light} setLight={setLight}/>
     
    
      <Countries
        country={country}
        category={category}
        filterValue={filterValue}
        continent={continent}
        light={light}
      />
    </>
  );
};

export default Header;
