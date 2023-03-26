import React from 'react'


const Content = () => {
  return (
<section>
  <div class="relative mx-auto max-w-7xl">
    <div class="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none">
      <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a>
          <div class="flex-shrink-0">
            <video class="object-cover w-full h-48 rounded-lg" src={"/syria.mp4"} controls/>
          </div>
        </a>
        <div class="flex flex-col justify-between flex-1">
          <a></a>
          <div class="flex-1">
            <a>
              <div class="flex pt-6 space-x-1 text-sm text-gray-500">
                <time datetime="2023-03-24"> Mar 24, 2023 </time>
                <span aria-hidden="true"> · </span>
                <span> 4 min read </span>
              </div>
              <h2 className="primaryTextColor font-bold text-3xl mt-2">
                 New attack targets U.S. <br /> base in Syria - CBSNEWS
              </h2>
              <p className="primaryTextColor text-lg">
                 A new attack targeted a U.S. military base in Syria on Friday, according to U.S. officials. Overnight, the U.S. military carried out precision airstrikes in retaliation for another attack Thursday that killed an American contractor and hurt six other people, according to the Pentagon.
              </p>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.cbsnews.com/video/new-attack-targets-us-base-in-syria-following-american-airstrikes-over-contractors-death/?intcid=CNM-00-10abd1h"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read full news</span>
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
        </div>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/">
            <div class="flex-shrink-0">
              <video class="object-cover w-full h-48 rounded-lg" src={"/TikTok.mp4"} controls/>
            </div>
          </a>
          <div class="flex flex-col justify-between flex-1">
            <a href="/"></a>
            <div class="flex-1">
            <a>
              <div class="flex pt-6 space-x-1 text-sm text-gray-500">
                <time datetime="2023-03-24"> Mar 23, 2023 </time>
                <span aria-hidden="true"> · </span>
                <span> 3 min read </span>
              </div>
              <h2 className="primaryTextColor font-bold text-3xl mt-2">
                 TikTok CEO <br /> data security - CBSNEWS
              </h2>
              <p className="primaryTextColor text-lg">
              TikTok CEO Shou Zi Chew plans to tell a House committee taking real action.
              </p>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.cbsnews.com/video/new-attack-targets-us-base-in-syria-following-american-airstrikes-over-contractors-death/?intcid=CNM-00-10abd1h"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read full news</span>
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
          </div>
        </div>

        <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/">
            <div class="flex-shrink-0">
              <video class="object-cover w-full h-48 rounded-lg" src={"/humanity.mp4"} controls/>
            </div>
          </a>
          <div class="flex flex-col justify-between flex-1">
            <a href="/"></a>
            <div class="flex-1">
            <a>
              <div class="flex pt-6 space-x-1 text-sm text-gray-500">
                <time datetime="2023-03-24"> Mar 20, 2023 </time>
                <span aria-hidden="true"> · </span>
                <span> 5 min read </span>
              </div>
              <h2 className="primaryTextColor font-bold text-3xl mt-2">
               "humanity is on thin ice" - CBSNEWS
              </h2>
              <p className="primaryTextColor text-lg">
              The world must take action to "defuse the climate time bomb," the United Nations secretary-general.
              </p>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.cbsnews.com/video/new-attack-targets-us-base-in-syria-following-american-airstrikes-over-contractors-death/?intcid=CNM-00-10abd1h"
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read full news</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Content