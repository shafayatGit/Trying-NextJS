"use client"
// import React from 'react'
// import React, { useEffect, useState } from "react";

// const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");


  useEffect(() => {
    fetchMeals();
  }, [search]);

export default function MealsSearchInput() {
  return (
    <div>MealsSearchInput</div>
  )
}
