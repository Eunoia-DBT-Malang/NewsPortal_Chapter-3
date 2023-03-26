import React from 'react'
import { data } from './data'

const TopTopics = () => {
  return (
    <div className="container w-11/12 mx-auto md:my-10 lg:my-8">
      <h1 className="underline 
            decoration-6 decoration-orange-400 font-bold text-center text-xl md:text-2xl lg:text-3xl my-4 md:mt-0 -mt-20">
          Hot News
        </h1>
        <div className="flex flex-wrap">
          {data.map((data) => (
          <div className="md:w-6/12 w-full md:py-10 py-4 px-8">
            <span>{data.publishedAt}</span>
            <h1 className="md:text-xl font-bold">{data.title}</h1>
            <p className="text-sm md:text-md">
              {data.description}
            </p>
            <a
              rel="noopener noreferrer"
              href={data.url}
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          ))}
        </div>
      </div>
  )
}

export default TopTopics