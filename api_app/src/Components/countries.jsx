import React from "react";
import {Link} from "react-router-dom";
const Countries = ({ country, filterValue, category, continent ,light}) => {
  return (
    <>
      <div  className="search" >
        <div className={light ? "nav-light input" : "nav-dark input"}>

       
          <i className={light? " fa fa-solid fa-magnifying-glass black nav-light ":" fa fa-solid fa-magnifying-glass nav-dark"}></i>
        <input
         className={light ? "nav-light" : "nav-dark"} 
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            filterValue(e.target.value);
          }}/>
          </div>

         
          
        {/* <label htmlFor="region">Filter by Region</label> */}
        <select
          name="region"
          id="region-selector"
         className={light ? "nav-light border-none" : "nav-dark"} 
          
          onChange={(e) => {
            continent(e.target.value);
          }}
        >
          <option value="" disabled selected hidden>Filter by Region</option>
          {category.map((catagories, index) => {
            return (
              <option value={catagories} key={index}>
                {catagories}
              </option>
            );
          })}
        </select>
      </div>
      <div className="wrapper">

      {country.map((data) => {
        const { numericCode, name, region, population, capital, flag } = data;
        return (
          <Link  to={numericCode} key={numericCode}>
              <article className={light ? "nav-light all-country" : "nav-dark all-country"}>
                <div className="img">
            <img src={flag} alt="flag" width="48rem" height="48rem" />
                </div>
            <div  className={light ? "light-col info" : "dark-col info"} >
              <h1>{name}</h1>
              <p>
                Population : 
                <span> {population}</span>
              </p>
              <p>
                Region : 
                <span> {region}</span>
              </p>
              <p>
                Capital : 
                <span> {capital}</span>
              </p>
            </div>
          </article>
      </Link>
        );
      })}
      </div>
    </>
  );
};

export default Countries;
