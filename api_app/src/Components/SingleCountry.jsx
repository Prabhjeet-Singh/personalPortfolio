import React from "react";
import { useParams } from "react-router-dom";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";


const SingleCountry = ({country,light,setLight}) => {
    const {code}=useParams();
    const singleData=country.find((country)=>country.numericCode===code)
      console.log(singleData);
      const {  name, region, population, capital, flag ,subregion,nativeName,currencies,languages} = singleData;
  return (
<div className="singleCountry">
<MainHeader light={light} setLight={setLight}/>
<Link to="/"><button className="back-btn fa fa-solid fa-arrow-left" ><span>Back</span></button></Link>
<article  className="single-ar">
          <img src={flag} alt="flag" className="single-img" />
          <div className="info ">
            <h1 className="info-h1">{name}</h1> 
            <div className="sub-info">

            <div className="sub-info-one">

            <p>
              <span>Native Name : </span>
              {nativeName}
            </p>
            <p>
              <span>Population : </span>
              {population}
            </p>
            
            <p>
              <span>Sub Region : </span>
              {subregion}
            </p>
            
            <p>
              <span>Region : </span>
              {region}
            </p>
            </div>
            <div className="sub-info-2">

            <p>
              <span>Capital : </span>
              {capital}
            </p>
            <p>
              <span>Top Level Domain : </span>
              {singleData.topLevelDomain.map((item)=>item)}

            </p>
            <p>
              <span>Currencies : </span>
              {currencies[0].name}
              {/* {currencies.map((item)=>item)} */}
            </p>
            <p>
              <span>Languages : </span>
              {languages[0].name}
            </p>
            </div>
            </div>
            <p className="border-p">
              <span>Borders : </span>
             
               <span className="border">
              {singleData.borders?singleData.borders.map((item)=> item+" " ):"covered by sea"}
               </span>
            </p>
          </div>
        </article>
</div>
)}

export default SingleCountry;
