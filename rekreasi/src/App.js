import React, { useState } from "react";
import axios from "axios";
import query from "qs";
import "./App.css";
import CarouselData from "./components/CarouselData";
import CarouselImg from "./components/CarouselImg";
import Navbar from "./components/Navbar";

function App() {
  const [value, setValue] = useState({
    items: [],
    input: "",
  });

  const BASE_URL = "http://localhost:3030/wisata/query";

  const headers = {
    Accept: "application/sparql-results+json,*/*;q=0.9",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  const getDataTitles = async () => {
    const queryData = {
      query: `PREFIX md: <http://www.rekreasi.fake/wisatadatad#>
  
        SELECT ?titles ?provinces ?types ?prices ?coordinates
        WHERE
        {
          ?m     md:titles ?titles ;
        md:provinces ?provinces ;
        md:types ?types ;
        md:prices  ?prices ;
        md:coordinates ?coordinates ;
          FILTER regex(?titles, "${value.input}") 
        }`,
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: "POST",
        headers,
        data: query.stringify(queryData),
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((items, index) =>
        formatter(items, index)
      );
      console.log(formatted_data);

      setValue({
        ...value,
        items: formatted_data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getDataProvinces = async () => {
    const queryData = {
      query: `PREFIX md: <http://www.rekreasi.fake/wisatadatad#>
  
        SELECT ?titles ?provinces ?types ?prices ?coordinates
        WHERE
        {
          ?m     md:titles ?titles ;
        md:provinces ?provinces ;
        md:types ?types ;
        md:prices  ?prices ;
        md:coordinates ?coordinates ;
          FILTER regex(?provinces, "${value.input}") 
        }`,
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: "POST",
        headers,
        data: query.stringify(queryData),
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((items, index) =>
        formatter(items, index)
      );
      console.log(formatted_data);

      setValue({
        ...value,
        items: formatted_data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getDataTypes = async () => {
    const queryData = {
      query: `PREFIX md: <http://www.rekreasi.fake/wisatadatad#>
  
        SELECT ?titles ?provinces ?types ?prices ?coordinates
        WHERE
        {
          ?m     md:titles ?titles ;
        md:provinces ?provinces ;
        md:types ?types ;
        md:prices  ?prices ;
        md:coordinates ?coordinates ;
          FILTER regex(?types, "${value.input}") 
        }`,
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: "POST",
        headers,
        data: query.stringify(queryData),
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((items, index) =>
        formatter(items, index)
      );
      console.log(formatted_data);

      setValue({
        ...value,
        items: formatted_data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getAll = async () => {
    const queryData = {
      query: `PREFIX md: <http://www.rekreasi.fake/wisatadatad#>
  
        SELECT ?titles ?provinces ?types ?prices ?coordinates
        WHERE
        {
          ?m     md:titles ?titles ;
        md:provinces ?provinces ;
        md:types ?types ;
        md:prices  ?prices ;
        md:coordinates ?coordinates ;
        }`,
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: "POST",
        headers,
        data: query.stringify(queryData),
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((items, index) =>
        formatter(items, index)
      );
      console.log(formatted_data);

      setValue({
        ...value,
        items: formatted_data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const formatter = (items, index) => {
    return {
      d: index,
      titles: items.titles.value,
      provinces: items.provinces.value,
      types: items.types.value,
      prices: items.prices.value,
      coordinates: items.coordinates.value,
    };
  };

  const handleChange = (event) => {
    setValue({
      ...value,
      input: event.target.value,
    });
  };

  return (
    <div className="">
      <div className="App">
        <Navbar />
        <CarouselImg slides={CarouselData} />
      </div>
      <div className="searchBarDisplay">
        <div className="searchBar">
          <input
            onChange={handleChange}
            id="search"
            type="text"
            className=""
            placeholder="Search Test"
            required
          ></input>
        </div>
        <input
          className="getData"
          placeholder="Find"
          required
          type="submit"
          onClick={function (event) {
            getDataTitles();
            getDataProvinces();
            getDataTypes();
          }}
        >
          {/* <span>Find</span> */}
        </input>
        <button
          className="getAll"
          onClick={function (event) {
            getAll();
          }}
        >
          <span>Lihat Semua</span>
        </button>
      </div>
      <div className="titleBox">
        <span className="titleInformation">
          <br />
          Informasi
        </span>
      </div>
      {/* <div className="gridBox"> */}
      <div className="information">
        <ol>
          {value.items.map((item, i) => (
            <li key={i} className="listBox">
              <div className="itemBox">
                <div className="">
                  <h2>{item.titles}</h2>
                </div>
                <h3 className="">
                  {item.provinces}
                  <br />
                </h3>
                Tipe Wisata : {item.types}
                <br />
                HTM : {item.prices}
                <br />
                Koordinat : {item.coordinates}
                <br />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
    // </div>
  );
}

export default App;
