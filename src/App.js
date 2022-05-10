import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { APP_ID, APP_KEY } from "./auth/edamam";
import Recipe from "./components/Recipe";
import { v4 as uuid } from "uuid";
import { UpCircleOutlined } from "@ant-design/icons";

function App() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const result = await axios.get(url);
    //Call API thanh cong => xoa value input
    console.log(result);
    setRecipe(result.data.hits);
    setQuery("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="App">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          HDFood Recipes{" "}
          <img
            src="https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              objectFit:'cover',
            }}
            alt=""
          />{" "}
        </h1>
        <h3
          style={{
            color: "white",
            fontSize: "1.5rem",
            margin: 0,
            fontWeight: "normal",
          }}
        >
          A simple food recipes search website was coded by Hoang Dung. API
          source: Edamam
        </h3>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tìm món ăn (Anh/Việt)"
            autoComplete="off"
            onChange={handleChange}
            value={query}
          />
          <input type="submit" value="SEARCH" />
        </form>
        <div className="recipes">
          {recipe !== [] &&
            recipe.map((item, index) => {
              return <Recipe key={uuid()} recipe={item}></Recipe>;
            })}
        </div>
        <UpCircleOutlined
          className="up"
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </>
  );
}

export default App;
