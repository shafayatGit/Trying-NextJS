"use client";

import { setConfig } from "next/config";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Meals || Learning NextJS",
  description: "Learning next app",
};

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMeals = async () => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      ).then((res) => res.json());
      setMeals(data?.meals || []);
      return data.meals;
      // console.log(data);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div className="">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-2xl p-3 mb-3"
          placeholder="Search Meal Here"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {meals.map((singleMeal) => (
          <div className="border p-4">
            <h1>Meal: {singleMeal.strMeal}</h1>
            <h1>Category: {singleMeal.strCategory}</h1>
            <h1>Instructions: {singleMeal.strInstructions}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
