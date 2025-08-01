import Link from "next/link";
import React from "react";

const Navber = () => {
  return (
    <div>
      {/* Navber */}
      <ul className="flex gap-6">
        <li>
          <Link href={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link href={"/about"}>About</Link>{" "}
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navber;
