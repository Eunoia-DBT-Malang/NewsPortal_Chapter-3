import Image from "next/image";
import React, { useState, useEffect } from "react";

function NewsList() {
  return (
    <div className="mx-24 mt-8">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, User. What are you looking for?
      </h1>
      <div className="p-4 border rounded-lg">
        <a href="/">
          <Image width={800} height={800} src="/images/1.jpeg" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {/* {news.map((article) => ( */}
        <a href="/" className="p-4 border rounded-lg">
          <Image width={400} height={400} src="/images/1.jpeg" />
        </a>
        {/* ))} */}
      </div>
    </div>
  );
}

export default NewsList;
