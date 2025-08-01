import React from "react";
const getSinglePost = async (id) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return data;
};

export default async function singlePost({ params }) {
  const p = await params;
  const data = await getSinglePost(p.id);
  // console.log(data)
  return (
    <div>
      <div className="border rounded-2xl p-4">
        <h1>Name: {data.name}</h1>
        <h1>UserName: {data.username}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Phone: {data.phone}</h1>
        {/* <Link href={`/blogs/${data.id}`}>Details</Link> */}

        <h1>Street:{data.address.street}</h1>
        <h1>City:{data.address.city}</h1>
        <h1>Zipcode:{data.address.zipcode}</h1>
      </div>{" "}
    </div>
  );
}
