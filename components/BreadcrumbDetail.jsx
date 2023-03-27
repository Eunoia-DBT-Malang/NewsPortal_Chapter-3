import React from "react";

const BreadcrumbDetail = () => {
  return (
    <nav aria-label="Breadcrumb" className="-mt-4 flex">
      <ol
        role="list"
        className="flex overflow-hidden rounded-lg border text-gray-600 bg-gray-100 w-44"
      >
        <li className="flex items-center hover:underline">
          <a
            href="/"
            className="flex h-10 items-center px-4 transition bg-white hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="ml-1.5 text-xs font-medium"> Home </span>
          </a>
        </li>

        <li className="relative flex items-center hover:underline">
          <span className="absolute inset-y-0 -left-px h-10 w-4 bg-white [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

          <a
            href=""
            className="flex h-10 items-center px-8 text-xs font-medium transition hover:text-gray-900"
          >
            Detail
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbDetail;
